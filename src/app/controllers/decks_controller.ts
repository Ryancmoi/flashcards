import type { HttpContext } from '@adonisjs/core/http'
import Deck from '#models/deck'
import { Session } from '@adonisjs/session'
import { DeckValidator } from '#validators/deck'
export default class DecksController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const decks = await Deck.query().orderBy('title').preload('cards')
    return view.render('pages/decks/index', { decks })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    return view.render('pages/decks/create')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, session, response }: HttpContext) {
    const data = await request.validateUsing(DeckValidator)

    const existingDeck = await Deck.findBy('title', data.title)
    if (existingDeck) {
      session.flash({
        title: ['Ce deck existe déjà'],
      })
      return response.redirect().back()
    }

    await Deck.create(data)

    return response.redirect().toRoute('home')
  }

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    const deck = await Deck.query().where('id', params.id).preload('cards').firstOrFail()
    return view.render('pages/decks/show', { deck })
  }

  /**
   * Edit individual record
   * Affichage du form
   */
  async edit({ params, view }: HttpContext) {
    const deck = await Deck.findOrFail(params.id)
    return view.render('pages/decks/edit', { deck })
  }

  /**
   * Handle form submission for the edit action
   * Modification des données
   */
  async update({ params, request, session, response }: HttpContext) {
    const deck = await Deck.findOrFail(params.id)

    const data = await request.validateUsing(DeckValidator)

    const existingDeck = await Deck.query()
      .where('title', data.title)
      .whereNot('id', deck.id)
      .first()

    if (existingDeck) {
      session.flash({
        title: ['Ce deck existe déjà'],
      })
      return response.redirect().back()
    }

    deck.merge(data)
    await deck.save()

    return response.redirect().toRoute('decks.show', { id: deck.id })
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const deck = await Deck.findOrFail(params.id)
    await deck.delete()
    return response.redirect().toRoute('home')
  }
}

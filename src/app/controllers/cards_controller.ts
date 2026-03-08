import Card from '#models/card'
import Deck from '#models/deck'
import type { HttpContext } from '@adonisjs/core/http'

export default class CardsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {}

  /**
   * Display form to create a new record
   */
  async create({ params, view }: HttpContext) {
    const deck = await Deck.findOrFail(params.id)
    return view.render('pages/cards/create', { deck })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, params, session }: HttpContext) {
    //trouver le deck parent
    const deck = await Deck.findOrFail(params.id)
    const data = request.only(['question', 'answer'])

    //verifications question > 10, reponse pas vide
    if (!data.question || data.question.length < 10 || !data.answer) {
      session.flash(
        'error',
        'La question doit faire au moins 10 caractères et la réponse est obligatoire.'
      )
      return response.redirect().back()
    }

    //verif anti doublon
    const existingCard = await deck
      .related('cards')
      .query()
      .where('question', data.question)
      .first()

    if (existingCard) {
      session.flash('error', 'Cette question existe déjà dans ce deck.')
      return response.redirect().back()
    }

    //si tout est bon création de la carte
    await deck.related('cards').create(data)

    return response.redirect().toRoute('decks.show', { id: deck.id })
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}

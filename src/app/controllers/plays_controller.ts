import type { HttpContext } from '@adonisjs/core/http'
import Deck from '#models/deck'

export default class PlayController {
  async start({ params, view }: HttpContext) {
    const deck = await Deck.findOrFail(params.id)
    return view.render('pages/play/start', { deck })
  }

  async card({ params, request, response, view }: HttpContext) {
    const deck = await Deck.query().where('id', params.id).preload('cards').firstOrFail()

    const currentIndex = parseInt(params.index)
    const score = parseInt(request.input('score', '0'))

    if (currentIndex >= deck.cards.length) {
      return response.redirect().toRoute(
        'play.finish',
        { id: deck.id },
        {
          qs: { score: score, total: deck.cards.length },
        }
      )
    }

    const card = deck.cards[currentIndex]
    return view.render('pages/play/card', { deck, card, currentIndex, score })
  }

  async finish({ params, request, view }: HttpContext) {
    const deck = await Deck.findOrFail(params.id)
    const score = request.input('score')
    const total = request.input('total')
    return view.render('pages/play/finish', { deck, score, total })
  }
}

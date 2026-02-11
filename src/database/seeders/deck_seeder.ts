import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Deck from '#models/deck'
import Card from '#models/card'

export default class extends BaseSeeder {
  async run() {
    const deckMaths = await Deck.create({ title: 'Maths', description: 'Calculs' })
    await Card.createMany([
      {
        question: '2-2',
        answer: '0',
        deckId: deckMaths.id,
      },
      {
        question: '4x2',
        answer: '8',
        deckId: deckMaths.id,
      },
      {
        question: '10 + 10',
        answer: '20',
        deckId: deckMaths.id,
      },
    ])
  }
}

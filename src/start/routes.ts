/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CardsController from '#controllers/cards_controller'
import DecksController from '#controllers/decks_controller'
import router from '@adonisjs/core/services/router'

router.get('/', [DecksController, 'index']).as('home')
router.get('/decks/create', [DecksController, 'create']).as('decks.create')
router.post('/decks', [DecksController, 'store']).as('decks.store')
router.get('/decks/:id', [DecksController, 'show']).as('decks.show')
router.delete('/decks/:id', [DecksController, 'destroy']).as('decks.destroy')

//route permettant d'afficher le form
router.get('/decks/:id/edit', [DecksController, 'edit']).as('decks.edit')
router.put('/decks/:id', [DecksController, 'update']).as('decks.update')

//création de carte
router.get('decks/:id/cards/create', [CardsController, 'create']).as('cards.create')
router.post('decks/:id/cards', [CardsController, 'store']).as('cards.store')

//afficher une carte
router.get('decks/:deck_id/cards/:id', [CardsController, 'show']).as('cards.show')

//supprimer une carte
router.delete('/decks/:deck_id/cards/:id', [CardsController, 'destroy']).as('cards.destroy')

/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

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

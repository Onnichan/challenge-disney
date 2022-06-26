const { Router } = require('express')
const AuthMiddleware = require('../middlewares/jwt.middleware')
const CharacterController = require('../controllers/character.controller')

// eslint-disable-next-line func-names
module.exports = function () {
  const router = Router()

  router.get('/', CharacterController.getAll)
  // router.get('/detail', CharacterController.detail)
  router.post('/', AuthMiddleware, CharacterController.create)
  router.patch('/:id', AuthMiddleware, CharacterController.update)
  router.delete('/:id', AuthMiddleware, CharacterController.delete)

  return router
}

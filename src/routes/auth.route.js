const { Router } = require('express')
const AuthController = require('../controllers/auth.controller')

// eslint-disable-next-line func-names
module.exports = function () {
  const router = Router()

  router.post('/login', AuthController.login)
  router.post('/register', AuthController.register)
  return router
}

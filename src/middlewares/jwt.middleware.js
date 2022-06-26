const jwt = require('jsonwebtoken')
const errorHelper = require('../helpers/error.helper')
const { JWT_SECRET } = require('../config')

module.exports = function (req, res, next) {
  const token = req.headers.authorization
  if (!token) errorHelper('Token must be sent', 400)

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) errorHelper('Invalid token', 401)

    req.user = decoded.user
    next()
  })
}

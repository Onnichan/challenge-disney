const { Router } = require("express");
const AuthController = require("../controllers/auth.controller");

module.exports = function () {
  const router = Router();

  router.post("/login", AuthController.login);
  router.post("/register", AuthController.register);
  return router;
};

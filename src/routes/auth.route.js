const { Router } = require("express");
const AuthController = require("../controllers/auth.controller");

module.exports = function () {
  const router = Router();

  router.post("/login");
  router.post("/register");
  return router;
};

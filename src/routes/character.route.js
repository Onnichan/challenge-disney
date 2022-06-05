const { Router } = require("express");
const AuthMiddleware = require('../middlewares/jwt.middleware');
const CharacterController = require("../controllers/character.controller");

module.exports = function () {
  const router = Router();

  router.get("/",AuthMiddleware, CharacterController.getAll);
  router.post("/", CharacterController.create);
  router.patch("/:id", CharacterController.update);
  router.delete("/:id", CharacterController.delete);

  return router;
};

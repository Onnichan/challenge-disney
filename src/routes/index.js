const { Router, json } = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const AuthRoutes = require("./auth.route");
const CharacterRoutes = require("./character.route");
const notFoundMiddleware = require("../middlewares/notfound.middleware");
const errorMiddleware = require("../middlewares/error.middleware");
require("express-async-errors");

module.exports = function () {
  const router = Router();
  const apiRoutes = Router();
  apiRoutes.use(json());
  apiRoutes.use(cors());
  apiRoutes.use(compression());
  apiRoutes.use(helmet());
  apiRoutes.use("/auth", AuthRoutes());
  apiRoutes.use("/characters", CharacterRoutes());

  router.use("/api/v1", apiRoutes);
  router.use(notFoundMiddleware);
  router.use(errorMiddleware);

  return router;
};

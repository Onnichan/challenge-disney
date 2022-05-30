const express = require("express");
const { PORT } = require("./src/config");
const sequelize = require("./src/config/connection");
const app = express();

sequelize
  .authenticate()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on PORT: ${PORT}`);
    });
  })
  .catch(console.log);

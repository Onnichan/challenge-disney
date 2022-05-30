const { Sequelize } = require("sequelize");
const { DATABASE, PASSWORD, USER } = require(".");

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  dialect: "mysql",
});

module.exports = sequelize;

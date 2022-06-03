const { Model, DataTypes } = require("sequelize");

class Gender extends Model {}

Gender.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Gender",
    asd,
  }
);

module.exports = Gender;

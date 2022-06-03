const { Model, DataTypes } = require("sequelize");

class Character extends Model {}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    history: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Character",
  }
);

module.exports = Character;

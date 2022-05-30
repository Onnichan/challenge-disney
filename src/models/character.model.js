const { Model, DataTypes } = require("sequelize");

class Character extends Model {}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    age: DataTypes.NUMBER,
    weight: DataTypes.NUMBER,
    image: DataTypes.STRING,
    history: DataTypes.STRING,
    movies: {
      type: DataTypes.INTEGER,
      references: {
        model: Movie,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Character",
  }
);

Character.sync()
  .then(() => {
    module.exports = new Character();
  })
  .catch(console.log);

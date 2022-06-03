const { Model, DataTypes } = require("sequelize");
const Movie = require("./movie.model");
const Character = require("./character.model");

class CharacterMovie extends Model {}

CharacterMovie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    MovieID: {
      type: DataTypes.INTEGER,
      references: {
        model: Movie,
        key: "id",
      },
    },
    CharacterID: {
      type: DataTypes.INTEGER,
      references: {
        model: Character,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

Movie.belongsToMany(Movie, { through: CharacterMovie });
Character.belongsToMany(Character, { through: CharacterMovie });

module.exports = CharacterMovie;

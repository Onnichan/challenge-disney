const { Model, DataTypes } = require("sequelize");
const Movie = require("./movie.model");
const Gender = require("./gender.model");

class MovieGender extends Model {}

MovieGender.init({
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
  GenderID: {
    type: DataTypes.INTEGER,
    references: {
      model: Gender,
      key: "id",
    },
  },
});

Movie.belongsToMany(Movie, { through: MovieGender });
Gender.belongsToMany(Gender, { through: MovieGender });

module.exports = MovieGender;

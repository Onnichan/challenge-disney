// const sequelize = require('../config/connection');
const Gender = require('./gender.model')
const Character = require('./character.model')
const Movie = require('./movie.model')
const User = require('./user.model')

Movie.hasMany(Character)
Character.belongsTo(Movie)

Character.hasMany(Movie)
Movie.belongsTo(Character)

Movie.hasMany(Gender)
Gender.belongsTo(Movie)

module.exports = {
  UserModel: User,
  GenderModel: Gender,
  CharacterModel: Character,
  MovieModel: Movie,
}

const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    dateCreate: DataTypes.DATE,
    qualification: DataTypes.ENUM('1', ' 2', ' 3', '4', '5'),
    image: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Movie',
  }
)

module.exports = Movie

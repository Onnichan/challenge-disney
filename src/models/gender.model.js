const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

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
    modelName: 'Gender',
  }
)

module.exports = Gender

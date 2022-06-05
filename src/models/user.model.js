const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcryptjs");

class User extends Model {
  comparePassword = (password) => {
    return bcrypt.compareSync(password, this.password);
  };
}

User.init(
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
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
      },
    },
  },
  {
    sequelize,
    hooks: {
      beforeSave: (user) => {
        if (user.password) {
          const salt = bcrypt.genSaltSync(10, "a");
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
    },
    modelName: "User",
  }
);
console.log("usermodel", User);

// User.sync()
//   .then(() => {
module.exports = User;
// })
// .catch(console.log);

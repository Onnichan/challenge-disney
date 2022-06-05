const UserModel = require("../models/user.model");

class UserRepository {
  async create(entity) {
    return await UserModel.create(entity);
  }

  async getUserByEmail(email) {
    return await UserModel.findOne({ where: { email: email } });
  }
}

module.exports = new UserRepository();

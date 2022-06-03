const UserModel = require("../models/user.model");

class UserRepository {
  async create(entity) {
    console.log(entity);
    return await UserModel.create(entity);
  }

  async getUserByEmail(email){
    console.log('email', email);
    console.log('userepo',UserModel);
    return await UserModel.findOne({ where: { email: email } });
  }
}

module.exports = new UserRepository();

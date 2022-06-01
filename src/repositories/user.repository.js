const UserModel = require("../models/user.model");

class UserRepository {
  async get(id) {
    return await UserModel.findOne(id);
  }

  async create(entity){
    return await UserModel.create(entity);
  }

  async update(id, entity){
    return await UserModel.update()
  }

  async delete(id){
    return await UserModel.destroy(id);
  }

  async getUserByEmail(email){
    return await UserModel.findOne({where: { email: email}});
  }
}

module.exports = new UserRepository();

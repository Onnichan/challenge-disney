const UserRepository = require("../repositories/user.repository");
// const errorHelper = require("../helpers/error.helper");

class UserService {
  async create(entity) {
    console.log('creating');
    return await UserRepository.create(entity);
  }

  async getUserByEmail(email) {
    return await UserRepository.getUserByEmail(email);
  }
}

module.exports = new UserService();

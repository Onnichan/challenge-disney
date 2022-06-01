const UserRepository = require("../repositories/user.repository");
const errorHelper = require("../helpers/error.helper");

class UserService {
  async get(id) {
    if (!id) errorHelper("id must be sent", 400);

    const currentEntity = await UserRepository.get(id);
    if (!currentEntity) errorHelper("entity was not found", 404);

    return currentEntity;
  }

  async create(entity) {
    return await UserRepository.create(entity);
  }

  async update(id, entity){
    if(!id) errorHelper('id must be sent', 400);

    return await UserRepository.update(id, entity);
  }

  async delete(id){
    if(!id) errorHelper('id must be sent', 400);

    return await UserRepository.delete(id);
  }

  async getUserByEmail(email){
    return await UserRepository.getUserByEmail(email);
  }
}

module.exports = new UserService();

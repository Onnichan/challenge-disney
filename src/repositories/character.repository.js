const CharacterModel = require("../models/character.model");

class CharacterRepository {
  async getAll() {
    return await CharacterModel.findAll({
      attributes: ["name", "image"],
    });
  }

  async create(entity) {
    return await CharacterModel.create(entity);
  }

  async update(id, body) {
    return await CharacterModel.update(body, { where: { id: id } });
  }

  async delete(id) {
    return await CharacterModel.destroy({ where: { id: id } });
  }

  async findByName(name) {
    return await CharacterModel.findOne({ where: { name: name } });
  }
}

module.exports = new CharacterRepository();

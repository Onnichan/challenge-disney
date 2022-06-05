const errorHelper = require("../helpers/error.helper");
const CharacterRepository = require("../repositories/character.repository");

class CharacterService {
  async getAll() {
    return await CharacterRepository.getAll();
  }

  async create(entity) {
    const { name } = entity;
    const characterExist = await CharacterRepository.findByName(name);
    if (characterExist) errorHelper("This character already exist", 401);

    return await CharacterRepository.create(entity);
  }

  async update(id, body) {
    const updated = await CharacterRepository.update(id, body);
    return updated[0] > 0
      ? "The character was updated"
      : "Could not update the character";
  }

  async delete(id) {
    const deleted = await CharacterRepository.delete(id);
    // return deleted;
    return deleted > 0 ? "Character was deleted" : "Character was not deleted";
  }
}

module.exports = new CharacterService();

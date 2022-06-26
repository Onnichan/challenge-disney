const errorHelper = require('../helpers/error.helper')
const CharacterRepository = require('../repositories/character.repository')

class CharacterService {
  async getAll() {
    const getCharacters = await CharacterRepository.getAll()
    return getCharacters
  }

  async create(entity) {
    const { name } = entity
    const field = { name }
    const characterExist = await CharacterRepository.findByField(field)
    if (characterExist) errorHelper('This character already exist', 401)

    const createEntity = await CharacterRepository.create(entity)
    return createEntity
  }

  async update(id, body) {
    const updated = await CharacterRepository.update(id, body)
    return updated[0] > 0
      ? 'The character was updated'
      : 'Could not update the character'
  }

  async delete(id) {
    const deleted = await CharacterRepository.delete(id)
    return deleted > 0 ? 'Character was deleted' : 'Character was not deleted'
  }

  async findByField(query) {
    console.log(query)
    const getCharacter = await CharacterRepository.findByField(query)
    return getCharacter
  }
}

module.exports = new CharacterService()

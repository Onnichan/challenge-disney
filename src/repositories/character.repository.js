const { CharacterModel } = require('../models')

class CharacterRepository {
  async getAll() {
    const findAll = await CharacterModel.findAll({
      attributes: ['name', 'image'],
    })
    return findAll
  }

  async create(entity) {
    const create = await CharacterModel.create(entity)
    return create
  }

  async update(id, body) {
    const update = await CharacterModel.update(body, { where: { id } })
    return update
  }

  async delete(id) {
    const destroy = await CharacterModel.destroy({ where: { id } })
    return destroy
  }

  async findByField(field) {
    const findOne = await CharacterModel.findOne({ where: field })
    console.log('field', findOne)
    return findOne
  }
}

module.exports = new CharacterRepository()

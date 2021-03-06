const characterService = require('../services/character.service')

class CharacterController {
  async create(req, res) {
    const { body } = req
    const character = await characterService.create(body)
    return res.send(character)
  }

  async getAll(req, res) {
    // console.log(Object.keys(req.query));
    const characters =
      Object.keys(req.query).length > 0
        ? await characterService.findByField(req.query)
        : await characterService.getAll()
    return res.send(characters)
  }

  async update(req, res) {
    const { body } = req
    const { id } = req.params
    const character = await characterService.update(id, body)
    return res.send(character)
  }

  async delete(req, res) {
    const { id } = req.params
    const character = await characterService.delete(id)
    return res.send(character)
  }
}

module.exports = new CharacterController()

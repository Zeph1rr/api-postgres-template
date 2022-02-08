const ApiError = require('../error/ApiError')
const {SomeModel} = require('../models/models')

class SomeController {
    async getAll(req, res) {
        const lines = await SomeModel.findAll()
        res.json(lines)
    }
    async read(req, res, next) {
        const {id} = req.params
        const line = await SomeModel.findByPk(id)
        res.json(line)
    }
    async create(req, res) {
        const {some_unique_string, some_string} = req.body
        const some_line = await SomeModel.create({some_unique_string, some_string})
        res.json(some_line)
    }
    async delete(req, res) {
        const {id} = req.params
        const deleted = await SomeModel.destroy({ where: {id} })
        res.json(deleted)
    }
    async update(req, res) {
        const {id} = req.params
        const {some_unique_string, some_string} = req.body
        const updated = await SomeModel.update({ some_unique_string, some_string}, {where: {id}})
        res.json(updated)
    }
}

module.exports = new SomeController()
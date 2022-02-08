const Router = require('express')
const router = new Router()
const controller = require('../controllers/someController')

router.post('/', controller.create)
router.get('/', controller.getAll)
router.get('/:id', controller.read)
router.delete('/:id', controller.delete)
router.put('/:id', controller.update)

module.exports = router
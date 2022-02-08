const Router = require('express')
const router = new Router()
const someRouter = require('./some_routes')


router.use('/some_path', someRouter)


module.exports = router
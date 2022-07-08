const express =  require('express')
const router = express.Router()
const controller = require('../controllers/client')

router.post('/register-client', controller.clientRegistration)
router.get('/get-all-clients', controller.getAllClients)

module.exports = router
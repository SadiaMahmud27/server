const express =  require('express')
const router = express.Router()
const controller = require('../controllers/client')

router.post('/register-client', controller.clientRegistration)
router.get('/get-all-clients', controller.getAllClients)
router.get('/get-client-by-id/:id', controller.getClientById)
router.put('/update-client-by-id/:id', controller.updateClientById)
router.delete('/delete-client-by-id/:id', controller.deleteClientById)

module.exports = router
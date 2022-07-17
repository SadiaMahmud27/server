const express =  require('express')
const router = express.Router()
const controller = require('../controllers/fosterHome')

router.post('/add-foster-home', controller.fosterHomeRegistration)
router.get('/get-all-foster-homes', controller.getAllfosterHomes)
router.get('/get-foster-home-by-id/:id', controller.getfosterHomeById)
router.put('/update-foster-home-by-id/:id', controller.updatefosterHomeById)
router.delete('/delete-foster-home-by-id/:id', controller.deletefosterHomeById)

module.exports = router
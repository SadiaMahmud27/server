const express =  require('express')
const router = express.Router()
const controller = require('../controllers/cat')

router.post('/add-cat', controller.catRegistration)
router.get('/get-all-cats', controller.getAllcats)
router.get('/get-cat-by-id/:id', controller.getcatById)
router.put('/update-cat-by-id/:id', controller.updatecatById)
router.delete('/delete-cat-by-id/:id', controller.deletecatById)

module.exports = router
const express =  require('express')
const router = express.Router()
const controller = require('../controllers/customer')

router.post('/register-customer', controller.customerRegistration)
router.get('/get-all-customers', controller.getAllcustomers)
router.get('/get-customer-by-id/:id', controller.getcustomerById)
router.put('/update-customer-by-id/:id', controller.updatecustomerById)
router.delete('/delete-customer-by-id/:id', controller.deletecustomerById)

module.exports = router
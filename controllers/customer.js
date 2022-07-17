const Customer = require('../models/customer')

exports.customerRegistration = async (req, res) => {

    try {
        const bodyData = req.body
        let newcustomer = null
        const customerExists = await Customer.findOne({
            '$or': [
                { phone: bodyData.phone },
                { email: bodyData.email }
            ]
        })
        if (customerExists) {
            res.status(400).json({
                message: 'customer already exists.'
            })
        } else {
            const customer = new Customer(bodyData)
            newcustomer = await customer.save()
            res.status(200).json({
                message: 'Successfully Registered', 
                customer: newcustomer
            })
        } 
        
    } catch (error) {
        console.error(error)
    }

}

exports.getcustomerById = async (req, res) => {

    try {
        const id = req.params.id;
        const customer = await Customer.findById(id).populate({
            path: 'cats', model: 'Cat'
        })
        res.status(200).json({
            customer
        })
    } catch (error) {
        console.error(error)    
    }

}

exports.getAllcustomers = async (req, res) => {

    try {
        const customers = await Customer.find()
        res.status(200).json({
            customers
        })
    } catch (error) {
        console.error(error)    
    }

}

exports.updatecustomerById = async (req, res) => {

    try {
        const id = req.params.id;
        const payload = req.body;
        const customer = await Customer.updateOne({_id: id}, payload)
        res.status(200).json({
            customer
        })
    } catch (error) {
        console.error(error)    
    }

}

exports.deletecustomerById = async (req, res) => {

    try {
        const id = req.params.id;
        const customer = await Customer.findOneAndDelete({ _id: id })
        res.status(200).json({
            customer
        })
    } catch (error) {
        console.error(error)    
    }

}
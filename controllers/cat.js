const Cat = require('../models/cat')
const Customer = require('../models/customer')

exports.catRegistration = async (req, res) => {

    try {
        const bodyData = req.body
        const query = bodyData
        delete query.notes
        let newcat = null
        const catExists = await Cat.findOne(query)
        if (catExists) {
            res.status(400).json({
                message: 'cat already exists.'
            })
        } else {
            const cat = new Cat(bodyData)
            newcat = await cat.save()
            customer = await Customer.updateOne({ _id: bodyData.customer }, { $push: { cats: newcat._id } })
            res.status(200).json({
                message: 'Successfully Registered', 
                cat: newcat
            })
        } 
        
    } catch (error) {
        console.error(error)
    }

}

exports.getcatById = async (req, res) => {

    try {
        const id = req.params.id;
        const cat = await Cat.findById(id).populate({
            path: 'customer client', model: 'Customer Client'
        })
        res.status(200).json({
            cat
        })
    } catch (error) {
        console.error(error)    
    }

}

exports.getAllcats = async (req, res) => {

    try {
        const cats = await Cat.find().populate({
            path: 'customer', model: 'Customer', select: 'name'
        })
        res.status(200).json({
            cats
        })
    } catch (error) {
        console.error(error)    
    }

}

exports.updatecatById = async (req, res) => {

    try {
        const id = req.params.id;
        const payload = req.body;
        const cat = await Cat.updateOne({_id: id}, payload)
        res.status(200).json({
            cat
        })
    } catch (error) {
        console.error(error)    
    }

}

exports.deletecatById = async (req, res) => {

    try {
        const id = req.params.id;
        const cat = await Cat.findOneAndDelete({ _id: id })
        res.status(200).json({
            cat
        })
    } catch (error) {
        console.error(error)    
    }

}
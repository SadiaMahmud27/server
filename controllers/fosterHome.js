const FosterHome = require('../models/fosterHome')

exports.fosterHomeRegistration = async (req, res) => {

    try {
        const bodyData = req.body
        let newfosterHome = null
        const fosterHomeExists = await FosterHome.findOne({
            '$or': [
                { phone: bodyData.phone },
                { email: bodyData.email }
            ]
        })
        if (fosterHomeExists) {
            res.status(400).json({
                message: 'fosterHome already exists.'
            })
        } else {
            const fosterHome = new FosterHome(bodyData)
            newfosterHome = await fosterHome.save()
            res.status(200).json({
                message: 'Successfully Registered', 
                fosterHome: newfosterHome
            })
        } 
        
    } catch (error) {
        console.error(error)
    }

}

exports.getfosterHomeById = async (req, res) => {

    try {
        const id = req.params.id;
        const fosterHome = await FosterHome.findById(id).populate({
            path: 'clients', model: 'Client'
        })
        res.status(200).json({
            fosterHome
        })
    } catch (error) {
        console.error(error)    
    }

}

exports.getAllfosterHomes = async (req, res) => {

    try {
        const fosterHomes = await FosterHome.find().populate({
            path: 'clients', model: 'Client', select: 'name'
        })
        res.status(200).json({
            fosterHomes
        })
    } catch (error) {
        console.error(error)    
    }

}

exports.updatefosterHomeById = async (req, res) => {

    try {
        const id = req.params.id;
        const payload = req.body;
        const fosterHome = await FosterHome.updateOne({_id: id}, payload)
        res.status(200).json({
            fosterHome
        })
    } catch (error) {
        console.error(error)    
    }

}

exports.deletefosterHomeById = async (req, res) => {

    try {
        const id = req.params.id;
        const fosterHome = await FosterHome.findOneAndDelete({ _id: id })
        res.status(200).json({
            fosterHome
        })
    } catch (error) {
        console.error(error)    
    }

}
const Client = require('../models/client')

exports.clientRegistration = async (req, res) => {

    try {
        const bodyData = req.body
        let newClient = null
        const clientExists = await Client.findOne({
            '$or': [
                { phone: bodyData.phone },
                { email: bodyData.email }
            ]
        })
        if (clientExists) {
            res.status(400).json({
                message: 'Client already exists.'
            })
        } else {
            const client = new Client(bodyData)
            newClient = await client.save()
            res.status(200).json({
                message: 'Successfully Registered', 
                client: newClient
            })
        } 
        
    } catch (error) {
        console.error(error)
    }

}

exports.getClientById = async (req, res) => {

    try {
        const id = req.params.id;
        const client = await Client.findById(id)
        res.status(200).json({
            client
        })
    } catch (error) {
        console.error(error)    
    }

}

exports.getAllClients = async (req, res) => {

    try {
        const clients = await Client.find()
        res.status(200).json({
            clients
        })
    } catch (error) {
        console.error(error)    
    }

}

exports.updateClientById = async (req, res) => {

    try {
        const id = req.params.id;
        const payload = req.body;
        const client = await Client.updateOne({_id: id}, payload)
        res.status(200).json({
            client
        })
    } catch (error) {
        console.error(error)    
    }

}

exports.deleteClientById = async (req, res) => {

    try {
        const id = req.params.id;
        const client = await Client.findOneAndDelete({ _id: id })
        res.status(200).json({
            client
        })
    } catch (error) {
        console.error(error)    
    }

}
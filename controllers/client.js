const Client = require('../models/client')

exports.clientRegistration = async (req, res) => {

    try {
        const bodyData = req.body
        let newClient = null
        const clientExists = await Client.findOne({
            phone: bodyData.phone
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
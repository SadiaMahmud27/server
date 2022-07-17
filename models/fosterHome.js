const mongoose = require('mongoose')
const schema = mongoose.Schema 

const fosterHomeSchema = new schema(
    {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        clients: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Client',
            required: false
        }],
    }, 
    {
        timestamps: true 
    }
)

module.exports = mongoose.model('FosterHome', fosterHomeSchema)
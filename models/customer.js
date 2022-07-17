const mongoose = require('mongoose')
const schema = mongoose.Schema 

const customerSchema = new schema(
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
        nid: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        cats: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cat',
            required: false
        }]
    }, 
    {
        timestamps: true 
    }
)

module.exports = mongoose.model('Customer', customerSchema)
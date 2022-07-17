const mongoose = require('mongoose')
const schema = mongoose.Schema 

const clientSchema = new schema(
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
        rating: {
            type: Number,
            required: true
        },
        limit: {
            type: Number,
            required: true
        },
        customersAndCats: [{
            customer: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Customer',
                required: false
            },
            cats: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Cat',
                required: false
            }]
        }]
    }, 
    {
        timestamps: true 
    }
)

module.exports = mongoose.model('Client', clientSchema)
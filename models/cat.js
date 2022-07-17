const mongoose = require('mongoose')
const schema = mongoose.Schema 

const catSchema = new schema(
    {
        name: {
            type: String,
            required: false
        },
        age: {
            type: Number,
            required: false
        },
        gender: {
            type: String,
            required: false
        },
        notes: {
            type: String,
            required: false
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer',
            required: true
        },
        client: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Client',
            required: false
        }
    }, 
    {
        timestamps: true 
    }
)

module.exports = mongoose.model('Cat', catSchema)
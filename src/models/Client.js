let mongoose = require('mongoose')

let clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: [Number],
    address: String,
    complement: String,
    complement: [{
        io: Boolean,
        value: Number,
        date: {
            type: Date,
            default: Date.now,
            required: true
        }
    }]
})

module.exports = mongoose.model('client', clientSchema)
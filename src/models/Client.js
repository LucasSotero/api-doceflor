let mongoose = require('mongoose')

let clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cpf: Number,
    phone: [Number],
    address: String,
    complement: String,
    credits: [{
        io: Boolean,
        value: Number,
        date: Date
        }]
    })

module.exports = mongoose.model('client', clientSchema)
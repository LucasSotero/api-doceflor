let mongoose = require('mongoose')

let paymentSchema = new mongoose.Schema({
    Date: {
        type: Date,
        default: Date.now,
        require: true
    },
    code: String,
    confirmed: Boolean,
    method: String
})

module.exports = mongoose.model('payment', paymentSchema)
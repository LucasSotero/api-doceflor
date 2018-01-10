let mongoose = require('mongoose')

let paymentSchema = new mongoose.Schema({
   name: String
})

module.exports = mongoose.model('payment', paymentSchema)


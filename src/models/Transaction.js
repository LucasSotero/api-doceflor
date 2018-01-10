let mongoose = require('mongoose')

let atributeSchema = new mongoose.Schema({
    code: String,
    io: Boolean,
    value:Number,
    registerAt: Date,
    payAt: Date,
    confirmed: Boolean,
    description: String,
    method: String
})

module.exports = mongoose.model('transaction', atributeSchema)


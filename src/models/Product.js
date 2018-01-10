let mongoose = require('mongoose')

    let productSchema = new mongoose.Schema({
        barCode: String,
        name: {
            type: String,
            required: true
        },
        value: Number,
        history: [{
            io: Boolean,
            amount: Number,
            input: Number,
            output: Number,
            date: Date
        }]
    })

module.exports = mongoose.model('product', productSchema)
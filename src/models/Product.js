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
            value: Number,
            date: {
                type: Date,
                default: Date.now,
                required: true
            }
        }]
    })

module.exports = mongoose.model('product', productSchema)
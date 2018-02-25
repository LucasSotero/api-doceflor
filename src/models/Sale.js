let mongoose = require('mongoose')

let saleSchema = new mongoose.Schema({
    discount: Number,
    date: {
        type: Date,
        default: Date.now
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client'
    },
    products: [{
        id: String,
        name: String,
        value: Number,
        discount: Number
    }],
    pays: [{
        Date: {
            type: Date,
            default: Date.now,
            require: true
        },
        code: String,
        confirmed: Boolean,
        method: String,
        value: String
    }]
})

module.exports = mongoose.model('sale', saleSchema)
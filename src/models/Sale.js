let mongoose = require('mongoose')

let saleSchema = new mongoose.Schema({
    code: String,
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    }],
    pays: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'payment'
    }]
})

module.exports = mongoose.model('sale', saleSchema)
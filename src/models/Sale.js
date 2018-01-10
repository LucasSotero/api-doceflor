let mongoose = require('mongoose')

let saleSchema = new mongoose.Schema({
    code: String,
    discount: Number,
    date: Date,
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
        ref: 'transaction'
    }]
})

module.exports = mongoose.model('sale', saleSchema)
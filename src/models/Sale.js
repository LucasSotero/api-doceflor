let mongoose = require('mongoose')
let product = mongoose.model('product')
let client = mongoose.model('client')

let saleSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client'
    },
    products: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product'
        },
        value: Number,
        discount: Number
    }],
    pays: [
        {
          date: {
            type: Date,
            default: Date.now,
            require: true
          },
          code: String,
          confirmed: Boolean,
          method: String,
          value: Number
        }
    ]
})

module.exports = mongoose.model('sale', saleSchema)
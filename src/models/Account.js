let mongoose = require('mongoose')

    let accountSchema = new mongoose.Schema({
       name: String,
       type: String,
       transactions: [{
           type: mongoose.Schema.Types.ObjectId,
           ref: 'transaction'
       }]
    })

module.exports = mongoose.model('account', accountSchema)

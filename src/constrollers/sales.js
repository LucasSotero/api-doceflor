const model = require('../models/Sale');
const GenericController = require('./base');
let mongoose = require('mongoose')

module.exports = function () {
    const controller = new GenericController(model)
    controller.getSale = (req, res) => {
        return new Promise((resolve) => {
            model.findById(req.params.id).populate(['client', 'products._id']).exec((err, result) => {
                    if (err) { return res.status(404).json({ err: err }) }
                    return res.json({ data: result })
                })
            })
        }
    return controller
}

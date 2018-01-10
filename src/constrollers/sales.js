const model = require('../models/Sale');
const GenericController = require('./base');

module.exports = function () {
    const controller = new GenericController(model)
    return controller
}

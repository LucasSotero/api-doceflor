const model = require('../models/Client');
const GenericController = require('./base');

module.exports = function () {
    const controller = new GenericController(model)
    return controller
}

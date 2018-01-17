const model = require('../models/Product');
const GenericController = require('./base');

module.exports = function () {
    const controller = new GenericController(model)
    return controller
}

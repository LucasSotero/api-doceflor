const model = require('../models/Payment');
const GenericController = require('./base');

module.exports = function () {
    const controller = new GenericController(model)
    return controller
}

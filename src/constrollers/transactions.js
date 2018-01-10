const model = require('../models/Transaction');
const GenericController = require('./base');

module.exports = function () {
    const controller = new GenericController(model)
    return controller
}

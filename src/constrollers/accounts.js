const model = require('../models/Account');
const GenericController = require('./base');

module.exports = function () {
    const controller = new GenericController(model)
    return controller
}

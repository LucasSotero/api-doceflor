module.exports = function (app) {
    let controller = require('../constrollers/sales')()

    app.get('/sales', controller.list)
    app.post('/sales', controller.post)
    app.put('/sales/:id', controller.put)
    app.get('/sales/:id', controller.view)
    app.delete('/sales/:id', controller.delete)

}


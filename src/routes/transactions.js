module.exports = function (app) {
    let controller = require('../constrollers/transactions')()

    app.get('/transactions', controller.list)
    app.post('/transactions', controller.post)
    app.put('/transactions/:id', controller.put)
    app.get('/transactions/:id', controller.view)
    app.delete('/transactions/:id', controller.delete)

}


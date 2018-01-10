module.exports = function (app) {
    let controller = require('../constrollers/accounts')()

    app.get('/accounts', controller.list)
    app.post('/accounts', controller.post)
    app.put('/accounts/:id', controller.put)
    app.get('/accounts/:id', controller.view)
    app.delete('/accounts/:id', controller.delete)

}


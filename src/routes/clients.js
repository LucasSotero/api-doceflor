module.exports = function (app) {
    let controller = require('../constrollers/clients')()

    app.get('/clients', controller.list)
    app.post('/clients', controller.post)
    app.put('/clients/:id', controller.put)
    app.get('/clients/:id', controller.view)
    app.delete('/clients/:id', controller.delete)
    app.post('/clients/details/:id', controller.postDetails)
    app.put('/clients/details/:id', controller.putDetails)
    app.get('/clients/details/:id', controller.getDetails)
}


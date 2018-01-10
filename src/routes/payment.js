module.exports = function (app) {
    let controller = require('../constrollers/payment')()

    app.get('/payment', controller.list)
    app.post('/payment', controller.post)
    app.put('/payment/:id', controller.put)
    app.get('/payment/:id', controller.view)
    app.delete('/payment/:id', controller.delete)

}


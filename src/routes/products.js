module.exports = function(app) {
    let controller = require('../constrollers/products')()

    app.get('/products', controller.list)
    app.post('/products', controller.post)
    app.put('/products/:id', controller.put)
    app.get('/products/:id', controller.view)
    app.delete('/products/:id', controller.delete)
}
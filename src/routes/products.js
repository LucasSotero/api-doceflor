module.exports = function(app) {
    let controller = require('../constrollers/products')()

    app.get('/products', controller.list)
    app.post('/products', controller.post)
    app.put('/products/:id', controller.put)
    app.get('/products/:id', controller.view)
    app.get('/products/search/:search', controller.getOne)
    app.delete('/products/:id', controller.delete)
    app.post('/products/details/:id', controller.postDetails)
    app.put('/products/details/:id', controller.putDetails)
    app.get('/products/details/:id', controller.getDetails)
    app.post('/product/report', controller.productreport)
}
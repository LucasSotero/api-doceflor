module.exports = function(app) {
    let controller = require('../constrollers/sales')()

    app.get('/sales', controller.getAllSale)
    app.post('/sales/report', controller.salereport)
    app.post('/sales', controller.post)
    app.put('/sales/:id', controller.put)
    app.get('/sales/:id', controller.getSale)
    app.delete('/sales/:id', controller.delete)
    app.get('/sales/search/:search', controller.getAll)
        // app.get('/sales/products/:id', controller.stock)
        // app.post('/sales/products/:id', controller.putproduct)
        // app.put('/sales/products/:id', controller.deleteProduct)

}
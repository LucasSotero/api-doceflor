let accounts = require('./accounts')
let clients = require('./clients')
let payments = require('./payment')
let products = require('./products')
let sales = require('./sales')
let transactions = require('./transactions')

module.exports = (app) => {
    app.get('/', function(req, res) {
        res.status(200).json({'title': 'hello'})
    })

    accounts(app)
    clients(app)
    payments(app)
    products(app)
    sales(app)
    transactions(app)
}

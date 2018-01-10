let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')
let mongoose = require('./libs/database')
let app = express()
let routes = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

routes(app)

module.exports = app;
const express = require('express')
const cors = require('./middleware/cors')
const routes = require('./routes')

const app = express()
// Allow Cross-Origin Resource Sharing
app.use(cors)

// Use the production build of the frontend.
app.use(express.static('build'))

// Allow application/json type parsing
app.use(express.json())

// Use combined routes
app.use('/', routes)

module.exports = app

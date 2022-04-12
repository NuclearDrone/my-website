const express = require('express')
const router = express.Router()
const portfolioRoutes = require('./portfolio')

// Combines all routes
router.use('/', portfolioRoutes)

module.exports = router

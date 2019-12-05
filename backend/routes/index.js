const express = require('express')
const router = express.Router()
const portfolioRoutes = require('./portfolio')

// Combines all routes
router.use('/api/portfolio', portfolioRoutes)

module.exports = router

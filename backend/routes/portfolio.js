const express = require('express')
const PortfolioController = require('../controllers/portfolio')

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const resData = await PortfolioController.sendEmail(req.body)
    res.status(200).send(resData)
  } catch (e) {

  }
})

module.exports = router
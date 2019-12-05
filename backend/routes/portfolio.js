const express = require('express')
const PortfolioController = require('../controllers/portfolio')

const router = express.Router()

router.post('/api/portfolio', async (req, res) => {
  try {
    const resData = await PortfolioController.sendEmail(req.body)
    if (resData.accepted !== undefined) {
      res.status(200).send(resData)
    } else {
      res.status(400).send(resData)
    }
  } catch (e) {
    console.log(e)
  }
})
router.post('/', (req, res) => {
  res.send('test')
})
module.exports = router

require('dotenv').config()

const PORT = process.env.PORT || 80
const ADDRESS = process.env.ADDRESS

module.exports = {
  PORT,
  ADDRESS
}

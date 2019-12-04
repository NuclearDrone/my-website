const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAILUSER,
    pass: process.env.EMAILPASS
  }
})

const sendMail = (options) => {
  let data = {}
  transporter.sendMail(options, (error, info) => {
    data = {
      error: error,
      info: info
    }
  })
  return data
}

module.exports = {
  sendMail
}
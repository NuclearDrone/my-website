const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAILUSER,
    clientId: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    refreshToken: process.env.REFRESHTOKEN,
    accessToken: process.env.ACCESSTOKEN
  },
  tls: {
    rejectUnauthorized: false
  }
})

const sendMail = async (options) => {
  const res = await transporter.sendMail(options)
  return res
}

module.exports = {
  sendMail
}
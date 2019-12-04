const sendMail = require('../services/nodemailer')

const sendEmail = async (info) => {
  const options = {
    from: process.env.EMAILUSER,
    to: 'contact@mickeenberg.com',
    subject: info.title,
    text: `Contact name: ${info.name} Contact email: ${info.email} Contact message: ${info.message}`
  }
  const res = await sendMail(options)
  return res
}

module.exports = {
  sendEmail
}
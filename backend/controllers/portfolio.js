const {sendMail} = require('../services/nodemailer')

const sendEmail = async (info) => {
  const options = {
    from: `${info.name} <${info.email}>`,
    to: 'contact@mickeenberg.com',
    subject: info.topic,
    replyTo: info.email,
    text: info.message
  }
  const res = await sendMail(options)
  return res
}

module.exports = {
  sendEmail
}
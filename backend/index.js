const http = require('http')
const app = require('./App')
const { PORT } = require('./config/config')
const keepAwake = require('./utils/keepAwake')

const server = http.createServer(app)

server.listen(PORT, () => {
  keepAwake('https://mickeenberg.herokuapp.com/')
  console.log(`Server listening on port ${PORT}`)
})
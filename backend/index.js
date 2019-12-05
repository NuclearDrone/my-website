const http = require('http')
const app = require('./App')
const { PORT } = require('./config/config')

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
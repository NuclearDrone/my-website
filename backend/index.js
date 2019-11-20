const http = require('http')
const app = require('./App')
const { PORT } = require('./config/config')

const server = http.createServer(app)

server.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening on port ${PORT}`)
})
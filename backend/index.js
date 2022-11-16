const http = require('http')
const app = require('./App')
const { PORT, ADDRESS } = require('./config/config')
const keepAwake = require('./utils/keepAwake')

const server = http.createServer(app)

server.listen(PORT, () => {
  keepAwake(ADDRESS)
  console.log(`Server listening on port ${PORT}`)
})

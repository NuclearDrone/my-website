const { Pool } = require('pg')
require('dotenv').config()
const {
  PGDATABASE,
  PGHOST,
  PGPORT,
  PGUSER,
  PGPASSWORD,
  CONCURRENT_CONNECTIONS
  // DATABASE_URL,
  // NODE_ENV
} = process.env

const connectionPool = new Pool({
  user: PGUSER,
  host: PGHOST,
  database: PGDATABASE,
  password: PGPASSWORD,
  port: PGPORT
}, CONCURRENT_CONNECTIONS)

const executeQuery = async (query, ...args) => {
  const client = await connectionPool.connect()
  try {
    return await client.query(query, ...args)
  } catch (e) {
    console.log(e)
  } finally {
    await client.end()
  }
}

module.exports = {
  executeQuery
}

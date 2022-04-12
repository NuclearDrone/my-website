const { executeQuery } = require('./db')

const getAllProjects = async () => {
  const res = await executeQuery(
    'SELECT * FROM projects ORDER BY (id) DESC;'
  )
  return res.rows
}

module.exports = {
  getAllProjects
}

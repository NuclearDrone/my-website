const { executeQuery } = require('./db')

const getAllProjects = async () => {
  const res = await executeQuery(
    'SELECT * FROM projects'
  )
  return res.rows
}

module.exports = {
  getAllProjects
}

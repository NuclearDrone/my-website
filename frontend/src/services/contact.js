import axios from 'axios'

const contact = async information => {
  const res = await axios.post('/api/portfolio', information)
  return res.data
}
export default contact
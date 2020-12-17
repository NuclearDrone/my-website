import axios from 'axios'
import { API_BASE_URL } from '../utils/constants'

const contact = async information => {
  const res = await axios.post(`${API_BASE_URL}/portfolio`, information)
  return res.data
}
export default contact

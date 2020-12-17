import axios from 'axios'
import { API_BASE_URL } from '../utils/constants'

const baseUrl = API_BASE_URL

const getAllProjects = async () => {
  const res = await axios.get(`${baseUrl}/projects`)
  return res.data
}

export default { getAllProjects }

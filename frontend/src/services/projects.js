import axios from 'axios'
import { API_BASE_URL } from '../utils/constants'

const baseUrl = API_BASE_URL

const getAllProjects = async () => {
  try {
    const res = await axios.get(`${baseUrl}/projects`)
    return res.data
  } catch (e) {
    console.log(e.response)
    return e.response
  }
}

export default { getAllProjects }

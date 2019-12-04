import axios from 'axios'

const contact = async information => {
  const res = await axios.post('https://formspree.io/xzbzaevb', information)
  return res.data
}
export default contact
import axios from 'axios'
const BASE_URL = 'http://localhost:3001/courses'

const api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export default api
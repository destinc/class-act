import axios from 'axios'
// import ReviewForm from '../components/ReviewForm';
const BASE_URL = 'http://localhost:3001/'

const JWT_TOKEN = localStorage.getItem('token')

const api = axios.create({
  baseURL: BASE_URL, 
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Authorization': `Bearer ${JWT_TOKEN}`
  }
})

export const login = async (data) => {
  try {
    const response = await api.post('/auth/login', data)
    const { token, user } = response.data

    localStorage.setItem('token', token)
    return user
  }
  catch(e) {
    throw e
  }
}

export const getProfile = async () => {
  try {
    const response = await api.get('/app/profile')
    const { user } = response.data

    return user
  }
  catch(e) {
    throw e
  }
}

// export const editReview = async (id) => {
//   try {
//     const response = await api.put(`/reviews/${id}`, )

    
//   } catch (error) {
    
//   }

// }





export default api
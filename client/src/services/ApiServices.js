import axios from 'axios'
// import CourseForm from '../components/CourseList/CourseForm'
// import ReviewForm from '../components/ReviewForm'
// const BASE_URL = 'http://localhost:3001/'
const BASE_URL =process.env.API_URL || 'https://p3-class-act.herokuapp.com'

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

export const newCourse = async (data) => {
  try {
    const response2 = await api.post('/courses/', data)

    return response2.data
  }
  catch(e) {
    throw e
  }
}

export const showCourse = async (id) => {
  try {
    const response1 = await api.get(`/courses/${id}/reviews`)

    return response1.data
  }
  catch(e) {
    throw e
  }
}

export const courseListDashboard = async () => {
  try {
    const response3 = await api.get('/courses')

    return response3.data
  }
  catch(e) {
    throw e
  }
}

export const courseListMenu = async (data) => {
  try {
    const response3 = await api.get('/courses')

    return response3.data
  }
  catch(e) {
    throw e
  }
}

export default api
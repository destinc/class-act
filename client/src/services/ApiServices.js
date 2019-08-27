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
  catch(error) {
    throw error
  }
}

export const getProfile = async () => {
  try {
    const response = await api.get('/app/profile')
    const { user } = response.data

    return user
  }
  catch(error) {
    throw error
  }
}

export const newCourse = async (data) => {
  try {
    const response = await api.post('/courses/', data)

    return response.data
  }
  catch(error) {
    throw error
  }
}

export const showCourse = async (id) => {
  try {
    const response = await api.get(`/courses/${id}/reviews`)

    return response.data
  }
  catch(error) {
    throw error
  }
}

export const courseListDashboard = async () => {
  try {
    const response = await api.get('/courses')

    return response.data
  }
  catch(error) {
    throw error
  }
}

export const courseListMenu = async (data) => {
  try {
    const response = await api.get('/courses')

    return response.data
  }
  catch(error) {
    throw error
  }
}

export const reviewSubmit = async (id, data) => {
  try {
    const response = await api.put(`/reviews/${id}`, data)

    return response.data
  }
  catch(error) {
    throw error
  }
}

export const deleteReview = async (id) => {
  try {
    const response = await api.delete(`/reviews/${id}`)
    return response.data
  }

  catch(error) {
    throw error
  }
}



export default api
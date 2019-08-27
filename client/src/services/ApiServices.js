import axios from 'axios'
// import CourseForm from '../components/CourseList/CourseForm'
// import ReviewForm from '../components/ReviewForm'
// const BASE_URL = 'http://localhost:3001/'
const BASE_URL = process.env.API_URL || 'https://class-act-p3.herokuapp.com/'

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

export const showCourse = async (data) => {
  try {
    const response1 = await api.get(`/courses/${this.props.match.params.id}/reviews`, data)

    return response1.data
  }
  catch(e) {
    throw e
  }
}

export const courseListDashboard = async (data) => {
  try {
    const response3 = await api.get('/')

    return response3.data
  }
  catch(e) {
    throw e
  }
}

export const courseListMenu = async (data) => {
  try {
    const response3 = await api.get('/')

    return response3.data
  }
  catch(e) {
    throw e
  }
}

export default api
import React from 'react'
import Axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import api from '../../services/apiServices'
import Layout from './listlayout'
import './dashboard.css'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: []
    }
  }

  componentDidMount = async (res, req) => {
    const resp = await Axios.get('http://localhost:3001/courses/', api)
    console.log(resp)
    this.setState({
      courses: resp.data,
    })
  }
  render() {
    const { user } = this.props
    const list = this.state.courses.map(course => <Link key={course.id} to={`/courses/${course.id}`}><Layout key={course.id} name={course.name} /></Link>)
    return (
      <div>
        <h1>{user.name && `Hi ${user.name}! Check out the available courses to review!`}</h1>
        <h2>{list}</h2>

        <div>
          <p>Not seeing your course? Add one below.</p>
          <button>Add a Course</button>
        </div>

      </div>
    )

  }

}

export default Dashboard
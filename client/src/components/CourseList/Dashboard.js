import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { courseListDashboard } from '../../services/ApiServices'
import Layout from './listlayout'
import './dashboard.css'
import CourseForm from './CourseForm';


class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: [],
    }
  }

  componentDidMount = async (res, req) => {
    const resp = await courseListDashboard()
    this.setState({
      courses: resp.data,
    })
  }


  render() {
    const { user } = this.props
    const list = this.state.courses.map(course => <Link key={course.id} to={`/courses/${course.id}`}><Layout key={course.id} name={course.name} /></Link>)
    return (
      <div>
        <div className='home-link-container'><Link className="home-link" to="/">Home</Link></div>
        <h1 className='greeting'>{user.name && `Hi ${user.name}! Check out the available courses to review!`}</h1>
        <h2 className="list">{list}</h2>

        <div>
          <div className="add-course-container">
          <p className="add-course">Not seeing your course? Add one below.</p>
          </div>
          <CourseForm />
        </div>

      </div>
    )

  }

}

export default Dashboard
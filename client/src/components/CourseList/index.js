import React from 'react'
import { Link } from 'react-router-dom'
import { courseListMenu } from '../../services/ApiServices'
import Layout from './listlayout'

class CourseList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: []

        }
    }

    componentDidMount = async (res, req) => {
        const resp = await courseListMenu
        console.log(resp)
        this.setState({
            courses: resp.data,
        })
    }

    render() {

        const list = this.state.courses.map(course => <Link key={course.id} to={`/courses/${course.id}`}><Layout key={course.id} name={course.name} /></Link>)
        return (
            <div>
                <h1>{list}</h1>
                <button>Create Course</button>
            </div>
        )
    }
}

export default CourseList

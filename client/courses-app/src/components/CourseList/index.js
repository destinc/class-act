import React from 'react'
import Axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import api from '../../services/apiServices'
import Layout from './listlayout'


class CourseList extends React.Component {
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

import React from 'react'
import Axios from 'axios'
import './CourseForm.css'
// import { Redirect } from 'react-router-dom'
// import api from '../../services/apiServices'

class CourseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            instructor: '',
            description: ''

        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
        // console.log(event.target.value)
    }

    handleSubmit = async (event) => {
        // event.preventDefault()
        const { name, instructor, description } = this.state
        let newCourse = { name, instructor, description }
        // console.log(newCourse)
        return await Axios.post('http://localhost:3001/courses/', newCourse)
    }


    render() {
        return (
            <div>
                <form className="class-form" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Course</label>
                        <input
                            type='text'
                            name='name'
                            placeholder='New Course'
                            value={this.name}
                            onChange={this.handleChange}>
                        </input>
                    </div>
                    {/* <div> */}
                        <label>Instructor</label>
                        <input
                            type='text'
                            name='instructor'
                            placeholder='Instructor'
                            value={this.instructor}
                            onChange={this.handleChange}>
                        </input>
                    {/* </div> */}
                    <div>
                        <label>Description</label>
                        <input 
                        type='text' 
                        name='description'
                        placeholder='Description'
                        value={this.description}
                        onChange={this.handleChange}
                        ></input>
                    </div>
                    <button className="submit-button" type='submit' >Add a Course</button>
                </form>
            </div>
        )
    }
}

export default CourseForm


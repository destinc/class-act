import React from 'react'
import './CourseForm.css'
// import { Redirect } from 'react-router-dom'
import { newCourse } from '../../services/ApiServices'

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
        event.preventDefault()
        const { name, instructor, description } = this.state
        let newCourseData = { name, instructor, description }
        await newCourse(newCourseData)
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
                        <label>Instructor</label>
                        <input
                            type='text'
                            name='instructor'
                            placeholder='Instructor'
                            value={this.instructor}
                            onChange={this.handleChange}>
                        </input>
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
                    <button className="submit-button" type='submit'>Add a Course</button>

                </form>
            </div>
        )
    }
}

export default CourseForm


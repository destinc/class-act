import React from 'react'
import Axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import api from '../../services/ApiServices'


class CourseList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: []
        }
    }



    componentDidMount = async (res, req) => {
       await this.fetchCourses()

    }

    // const resp = await Axios.get('http://localhost:3001/courses', api)
    // console.log(resp)
    // this.setState({courses: resp.data})




    fetchCourses = async () => {
        try {
            const resp = await Axios.get('http://localhost:3001/courses', api)
            console.log(resp.data)
            
            return this.state.courses.map(course =>{
                return <p>{course}</p>
            })
        }
        catch (error) {
            throw error
        }
    }




    // listAllCourses = async () => {
    //     try{
    //         if(this.state.courses.length){
    //             return this.state.courses.map((courses => {
    //                 return (
    //                     <p> {courses}</p>
    //                 )
    //             }))
    //         }    
    //     }
    //     catch(error){
    //         throw error
    //     }
    // }





    render() {
        return (
            <div></div>
        )
    }
}

export default CourseList

import React from 'react'
import Axios from 'axios'
import api from '../../services/apiServices'
import CourseList from '../CourseList';

// {
//     isSignedIn &&
//     <div><Link to="/courses">Courses</Link></div>
//   }

class SingleCourse extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: ''


        }

    }

    componentDidMount = async (res, req)=> {
        const resp = await Axios.get(`http://localhost:3001/courses/${this.props.match.params.id}`, api)
            this.setState({
                data: resp.data
            })
        
        console.log(resp)
        
    }



    render(){
        return(
            <div>

            <div>{this.state.data.name}</div>
            
            
            </div>
        )
    }
}

export default SingleCourse;
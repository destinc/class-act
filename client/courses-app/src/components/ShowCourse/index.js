import React from 'react'
import Axios from 'axios'
import api from '../../services/apiServices'
import Layout from '../CourseList/listlayout'



class SingleCourse extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: ''


        }

    }

    componentDidMount = async (res, req)=> {
        const resp = await Axios.get(`http://localhost:3001/courses/${this.props.match.params.id}/reviews`, api)
            this.setState({
                data: resp.data
            })
        
        // console.log(resp + 'hi')
        console.log(this.state.data.reviews)
        
    }
    //We need to fix the routes in order for reviews to work


    render(){
        // const { data } = this.
        // const reviewMap = this.state.data.reviews.map(review => <Layout key={review.id}/>)
        
        return(
            <div>
            <h1>{this.state.data.name}</h1>
            <h2>Taught By: {this.state.data.instructor}</h2>
            <h3>Description</h3> 
            <p>{this.state.data.description}</p>
            {/* <p>{reviewMap}</p> */}
            
            </div>
        )
    }
}

export default SingleCourse;
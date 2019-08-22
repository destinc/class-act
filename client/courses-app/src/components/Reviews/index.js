import React from 'react'
import Axios from 'axios';
import api from '../../services/apiServices'
// import { Link } from 'react-router-dom'
import Layout from '../CourseList/listlayout'


class ReviewManager extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            courseId: '',
            reviews: ''


        }

    }

    componentDidMount = async (res, req) => {
        // this.courseSelect()
        const resp = await Axios.get(`http://localhost:3001/courses/${this.props.id}/reviews/`, api)
        this.setState({
            reviews: resp.data
        })
        //console.log(resp.data)

    }

    // courseSelect = async (res, req) => {
    //     const courseCall = await Axios.get(`http://localhost:3001/courses`, api)
    //     this.setState({
    //         courseId: courseCall.data.reviews

    //     })
    // }



    render() {
        
        return (
            <div>HI LORI</div>
        )
        
        //const render= {this.state.reviews.data.reviews.map(review =><Layout key={review.id} name={review.name}/>)}
        // const list = this.state.reviews.map(review => <Layout key={review.id} name={review.name} />)

    }
}

export default ReviewManager
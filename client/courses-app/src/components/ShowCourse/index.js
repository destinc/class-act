import React from 'react'
import Axios from 'axios'
import api from '../../services/apiServices'
import Layout from '../CourseList/listlayout'



class SingleCourse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: [],
            review: [],
            update: false,
            delete: false,
        }
    }

    componentDidMount = async (res, req) => {
        const resp = await Axios.get(`http://localhost:3001/courses/${this.props.match.params.id}/reviews`, api)
        this.setState({
            info: resp.data,
            review: resp.data.reviews
        })

        // console.log(resp + 'hi')
        // console.log(resp.data.reviews)

    }

    // handleUpdate = (event) => {
    //     const currentReview = event.target
    //     const { name, value } = currentReview
    //     const newState = {}
    //     newState[name] = value
    //     this.setState(newState)

    // }

    // ourLoop = async (res, req) => {

    //     const ourMap = this.state.info.reviews.map(wow => {
    //         return <p>{wow.review}</p>
    //     })
    // }




    render() {

        const ourMap = this.state.review.map(reviews => {
            return <h3>{reviews.review}</h3>
        })

        return (
            <div>
                <h1>{this.state.info.name}</h1>
                <h2>Taught By: {this.state.info.instructor}</h2>
                <h2>Description</h2>
                <p>{this.state.info.description}</p>
                {/* <form onChange={this.handleUpdate} onSubmit={}>

                </form> */}
                    {ourMap}
            </div>
        )
    }
}

export default SingleCourse;
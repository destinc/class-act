import React from 'react'
import Axios from 'axios'
import api from '../../services/ApiServices'
import Layout from '../CourseList/listlayout'
import ReviewForm from '../ReviewForm'



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

        this.getData()

        // console.log(resp + 'hi')
        // console.log(resp.data.reviews)

    }

    getData = async (res, req) => {
        const resp = await Axios.get(`http://localhost:3001/courses/${this.props.match.params.id}/reviews`, api)
        this.setState({
            info: resp.data,
            review: resp.data.reviews
        })
        console.log('test')


    }



    // ourLoop = async (res, req) => {

    //     const ourMap = this.state.info.reviews.map(wow => {
    //         return <p>{wow.review}</p>
    //     })
    // }




    render() {

        return (
            <div>
                <h1>{this.state.info.name}</h1>
                <h2>Taught By: {this.state.info.instructor}</h2>
                <h2>Description</h2>
                <p>{this.state.info.description}</p>

                {/* {ourMap} */}
                {this.state.review.map(reviews => { /*we are already mapping through the reviews in this line*/
                    return (
                    <div >
                        <h3 id={reviews.id}>{reviews.review}</h3>
                        <ReviewForm {...this.props} getData={this.getData} reviewId={reviews.id} /> {/* added reviewId, each render review needed a unique target, in order to update the specefied review(based on ID)*/}
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default SingleCourse;
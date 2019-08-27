import React from 'react'
import { showCourse, deleteReview } from '../../services/ApiServices'
// import Layout from '../CourseList/listlayout'
import ReviewForm from '../ReviewForm'
// import Images from '../Images/class-computer.jpg'
import './showcourse.css'

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
    }

    getData = async () => {
        const resp = await showCourse(this.props.match.params.id)
        this.setState({
            info: resp,
            review: resp.reviews
        })
    }

    deleteData = async () => {
        const resp = await deleteReview(this.props.match.params.id)
    }

    render() {

        return (
            <div className='course-info'>
                {/* <img className="styledimg" src={Images} alt='Students With Laptops'></img> */}
                <h1>{this.state.info.name}</h1>
                <h2 className='taught-by'>Taught By: {this.state.info.instructor}</h2>
                <h2 className='description-header'>Description</h2>
                <p className='description'>{this.state.info.description}</p>
                {/* {ourMap} */}
                {this.state.review.map(reviews => { /*we are already mapping through the reviews in this line*/
                    return (
                    <div >
                        <h3 id={reviews.id}>{reviews.review}</h3>
                        <ReviewForm getData={this.getData} reviewId={reviews.id} /> {/* added reviewId, each render review needed a unique target, in order to update the specefied review(based on ID)*/}
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default SingleCourse;
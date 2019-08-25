import React from 'react'
import Axios from 'axios';
import api from '../../services/ApiServices'
import { Link } from 'react-router-dom'
import Layout from '../CourseList/listlayout'


class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInput: '',
            review: '',
            updated: false,
            deleted: false,
            name: '',
            reviewId: props.reviewId //This is passed down from props from ShowCourse, see the render in ShowCourse. And this value is now a specific target for the specific review value.

        }

    }

    handleChange = (event) => {
        const updateReviews = event.target.value
        this.setState({
            userInput: updateReviews
        })

        console.log(event.target.value)
    }

    handleSubmit = async (event) => { //this is a helper function!
        // event.preventDefault() //prevent default normally stops the browser from refreshing. But in this case we needed the refresh to show the new edited reviews.
        let { userInput } = this.state //This is pulling from the ReviewForm class this.state above (whatever that value holds - line 12), instead of typing out this.state
        let review = userInput //In postman we called this review, thus re-naming it as review. Check seedDb.js if unsure.
        let updateReview = { review } //When sending keys through postman. This line of code is sending review as an object. So the backend can read it. 
        console.log(updateReview)//console log, to check.
        const id = this.state.reviewId //This variable is a 'cleaner' way to hit the back-end URL for the specified reviewId.
        await api.put(`/reviews/${id}`, updateReview)//This is the back-end call. Check server.js. This is passing in two items as parameters. You need to send it what specific item(in our case review) you are updating BY THE KEY(review id) with what you are updating WITH. Review.update(KEY and NEW VALUE) 
        // this.setState({updated: true}) //this could be used in a redirect if statement. Check ice-cream lab (component: updateIceCream render()  )

    }

    handleDelete = async (event) => {
        // await deleteReview(this.state.reviewId)
        // let deletedReview = { review }
        const id = this.state.reviewId
        await api.delete(`/reviews/${id}`)
    }




    render() {
        console.log(this.props)
        //this would be an if statement scenario. Using the original state of 
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type='textarea' placeholder='Edit Review Here'></input><br></br>
                <button type='submit'>Submit Edit</button>
            </form>
            <form onSubmit={this.handleDelete}>
            <button type='submit'>Delete This Review</button>
            </form>
            </div>
             

        )
    }
}

export default ReviewForm
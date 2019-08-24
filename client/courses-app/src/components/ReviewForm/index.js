import React from 'react'
import Axios from 'axios';
import api from '../../services/ApiServices'
import { Link } from 'react-router-dom'
import Layout from '../CourseList/listlayout'


class ReviewForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userInput: '',
            review: '',
            updated: false,
            delete: false,
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
        let { userInput } = this.state //This is pulling from the ReviewForm class this.state above (whatever that value holds - line 11), instead of typing out this.state
        let review = userInput //In postman we called this review, thus re-naming it as review. Check seedDb.js if unsure.
        let updateReview = { review } //When sending keys through postman. This line of code is sending review as an object. So the backend can read it. 
        console.log(updateReview)//console log, to check.
        const id = this.state.reviewId //This variable is a 'cleaner' way to hit the back-end URL.
        await api.put(`/reviews/${id}`, updateReview)//This is the back-end call. Check server.js. This is passing in two items as parameters. You need to send it what specific item(in our case review) you are updating BY THE KEY(review id) with what you are updating WITH. Review.update(KEY and NEW VALUE) 
        // this.setState({updated: true}) //this could be used in a redirect if statement. Check ice-cream lab (component: updateIceCream render()  )
        
        
        // let {name, review} = this.state
        // const updateReview = {name, review}
        // console.log(this.props.match.params.id)
    
        //await Axios.put(`http://localhost:3001/courses/${this.props.match.params.id}/reviews`, updateReview )//.then(
            //this.setState({updated:true})
        //)
        // this.props.getData()
        
    }

    // onSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log(event.target.parentNode.props)
    //     let ourReview = {
    //      review: this.state.review
    //     };
    //     return await Axios
    //       .put(`http://localhost:3001/courses/${this.props.match.params.id}/reviews/update`, ourReview )
    //       .then(response => console.log(response))
    //       .then(data => this.setState({ updated: true }))
    //       .catch(err => console.log(err));
    //   }


    render() {
        console.log(this.props)
        //this would be an if statement scenario. Using the original state of 
        return( 
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type='textarea' placeholder='Edit Review Here'></input><br></br>
                <button type='submit' >Submit Edit</button>
                {/* <button>Delete</button> */}
            </form> 
    
        )
    }
}

export default ReviewForm
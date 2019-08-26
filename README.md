# Class Act

**domain**: - insert the domain to your project

## description and user story 
-Took a recent course, want to have some anonymity when posting a review?

## technologies & packages
-React
-Sequelize
-express

## launch/build 
-clone and run locally
-The next iteration will be deployed online.

## major problems & solutions
-Properly understanding the movements of properties and data pieces in order to have a fully functional and working CRUD app.

## MVP
-Adding a course
-Updating a review
-Delete a review
-Read all courses and reviews.

## FUTURE -> databases and relations; APIs; component library
-Adding more media
-Adding more courses
-Adding more reviews
-Making logins more secure

## _code snippet_

-please note the // are the notes for each individual line-

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
    
 ## Image
 ![p3 image](/p3_logo.png)
 

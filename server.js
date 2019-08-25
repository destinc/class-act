const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const logger = require('morgan')
const path = require('path')

require('dotenv').config()

const authRouter = require('./routers/authRouter')
const appRouter = require('./routers/appRouter')
const { authorized } = require('./auth/auth')
const { Courses, Reviews, User } = require('./database/models')

const PORT = process.env.port

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(parser.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, './client/build')));

app.use('/auth', authRouter)
app.use('/app', authorized, appRouter)
app.use(passport.initialize())


app.get('/', async (req, res) => {
    try {

    }
    catch (error) {
        console.error(error)
        throw error
    }
})

app.get('/courses', async (req, res) => {
    try {
        const course = await Courses.findAll()
        res.send(course)
    }
    catch (error) {
        console.error(error)
        throw error
    }
})

app.post('/courses', async (req, res) => {
    try {
        const addCourseToList = await Courses.create(req.body)
        // await addCourseToList.setUser(findUser)
        res.json(addCourseToList)
    }
    catch (error) {
        console.error(error)
        throw error
    }
})

app.post('/courses/:id', async (req, res) => {
    try {
        const findUser = await User.findByPk(req.params.id)
        const addCourse = await Courses.create(req.body)
        await addCourse.setUser(findUser)
        res.json(addCourse)
    }
    catch (error) {
        console.error(error)
        throw error
    }
})

app.get('/courses/:id', async (req, res) => {
    try {
        const courseId = req.params.id
        const singleCourse = await Courses.findByPk(courseId)
        res.send(singleCourse)
    }
    catch (error) {
        console.error(error)
        throw error
    }
})

//Show all reviews 
app.get('/reviews/:id', async (req, res) => {
    try {
        const id = req.params.id
        const allReview = await Reviews.findByPk(id)
        res.json(allReview)
    }
    catch (error) {
        console.error(error)
        throw error
    }
})
//Show all reviews 

app.put('/reviews/:id', async (req, res) => { //The front end already knows the previous slug you want, thus you do not need to repeat/nest the courses/:id.
    try {
        const id = req.params.id
        const findReview = await Reviews.update(
            {
                review: req.body.review //review is part of your model (database model) req.body.review is the actual field you type in. Think postman request then body selection.
            },
            {
                where: {
                    id: id //this id: id is the review id within the database primary keys. And you need this in order to change the specific review id in the front end.
                }
            })
        res.send(findReview) //send the data you get back.
    } catch (error) {
        console.log('edit review backend')
        console.error(error)
    }
})

app.get('/courses/:id/reviews', async (req, res) => {
    try {
        const allCourses = await Courses.findByPk(req.params.id, {
            include: { model: Reviews }
        })
        res.json(allCourses)
    }
    catch (error) {
        console.error(error)
        throw error
    }
})


app.post('/courses/:id/reviews', async (req, res) => {
    try {
        const courseReview = await Reviews.create(req.body)
        const course = await Courses.findByPk(req.params.id)//this was what we were missing
        await courseReview.setCourse(course)//this was what we were missing


        res.send(courseReview)
    }
    catch (error) {
        console.error(error)
        throw error
    }
})


app.delete('/reviews/:id', async (req, res) => {
    try {
        const id = req.params.id
        let deleteReview = await Reviews.destroy({
            where:
            {id: id}
        })
        res.json({message: "This Review Was Deleted"})

    }
    catch (error) {
        console.error(error)
        throw error

    }

})


if (process.env.NODE_ENV == "production") {
    app.use('*', (req, res) => res.sendFile(path.join(__dirname, './client/build', "index.html")));
  }


app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message })
})


app.listen(PORT, () => console.log('this is working'))




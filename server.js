const express = require ('express')
const parser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const logger = require('morgan')

require('dotenv').config()

const authRouter = require('./routers/authRouter')
const appRouter = require('./routers/appRouter')
const { authorized } = require('./auth/auth')
const { Courses, Reviews } = require('./database/models')

const PORT = 3001

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(parser.json())

app.use('/auth', authRouter)
app.use('/app', authorized, appRouter)
app.use(passport.initialize())


app.get('/', async (req, res) =>{
    try{
        
    }
    catch(error){
        console.error(error)
        throw error
    }
})

app.get('/courses', async (req, res) =>{
    try{
        const course = await Courses.findAll()
        res.send(course)
    }
    catch(error){
        console.error(error)
        throw error
    }
})

app.get('/courses/:id', async (req, res) =>{
    try{
        const courseId = req.params.id
        const singleCourse = await Courses.findByPk(courseId)
        res.send(singleCourse)
    }
    catch(error){
        console.error(error)
        throw error
    }
})


app.get('/courses/:id/reviews', async (req, res) =>{
    try{
        const allCourses = await Courses.findByPk(req.params.id, {
            include: {model: Reviews}
        })
        res.json(allCourses)
    }
    catch(error){
        console.error(error)
        throw error
    }
})


app.post('/courses/:id/reviews', async (req, res) =>{
    try{
        const courseReview = await Reviews.create(req.body)
        const course = await Courses.findByPk(req.params.id)//this was what we were missing
        await courseReview.setCourse(course)//this was what we were missing
    
        res.send(courseReview)
    }
    catch(error){
        console.error(error)
        throw error
    }
})

app.put('/courses/:id/reviews/update', async (req, res) =>{
    try{
        //add code for update here on this line - we need to find courses first then update the review.
        const addReview = await Reviews.findByPk(req.params.id)

        await addReview.update(req.body)
        res.send(addReview)

    }
    catch(error){
        console.error(error)
        throw error
    }

})


app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message })
  })


app.listen(PORT, ()=>console.log('this is working'))




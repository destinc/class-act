const express = require ('express')
const parser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(parser.json())
app.use(cors())
const { Courses, Reviews } = require('./database/models')

const PORT = 3001

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

// app.get('/', async (req, res) =>{
//     const review = await Courses.findAll()
//     res.send(course)
// })

app.listen(PORT, ()=>console.log('this is working'))




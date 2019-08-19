const Sequelize = require('sequelize')

const db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
   })

   const Courses = db.define ("courses",{
        name: Sequelize.STRING,
        instructor: Sequelize.STRING,
        reviewId: Sequelize.INTEGER
   })

   const Reviews = db.define ("reviews",{
       courseId: Sequelize.INTEGER,
       review: Sequelize.TEXT 
   })


   module.exports = { db, 
    Courses, Reviews}
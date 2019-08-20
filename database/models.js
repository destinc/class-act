const Sequelize = require('sequelize')


const db = new Sequelize({
    database: 'courses_db',
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

   Courses.hasMany(Reviews)
   Reviews.belongsTo(Courses)


   module.exports = { db, 
    Courses, Reviews}
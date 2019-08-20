const Sequelize = require('sequelize')

const db = new Sequelize({
    database: 'courses_db',
    dialect: 'postgres'
})

const Courses = db.define("courses", {
    
    name: Sequelize.STRING,
    instructor: Sequelize.STRING,


})

const Reviews = db.define("reviews", {
    name: Sequelize.STRING,
    review: Sequelize.TEXT
})

const User = db.define('user',{
    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }

})

Courses.hasMany(Reviews)
Reviews.belongsTo(Courses)

User.hasMany(Courses)
Courses.belongsTo(User)

module.exports = { db, Courses, Reviews, User }
const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')
const db = new Sequelize((process.env.DATABASE_URL, 'postgres://localhost:5432/courses_db'),{
    database: 'courses_db',
    dialect: 'postgres'
})

const Courses = db.define("courses", {
    name: Sequelize.STRING,
    instructor: Sequelize.STRING,
    description: Sequelize.TEXT
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

User.beforeCreate(async (user, options) => {
    const hashedPassword = await bcrypt.hash(
      user.password,
      12
    )
  
    user.password = hashedPassword
  })

Courses.hasMany(Reviews)
Reviews.belongsTo(Courses)

User.hasMany(Courses)
Courses.belongsTo(User)

User.hasMany(Reviews)
Reviews.belongsTo(User)

module.exports = { db, Courses, Reviews, User }
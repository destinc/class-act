const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')

let db 
if (process.env.NODE_ENV === 'production') {
    // If the node environment is production, connect to a remote PSQL database
    db = new Sequelize(process.env.DATABASE_URL , {
      dialect: 'postgres'
    });
  }
  else {
    // Else connect to a local instance of PSQL running on your machine
    db = new Sequelize({
      database: 'courses_db', // Name of your local database
      dialect: 'postgres'
    });
  }


// const db = new Sequelize({
//     database: 'courses_db',
//     dialect: 'postgres'
// })

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
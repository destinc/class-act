const { Courses, Reviews, User } = require('../database/models')

const main = async () => {
    try {
    await Courses.destroy({
        where: {

        }
    })
    await Reviews.destroy({
        where: {}
    })

    const js = await Courses.create({
        name: 'Intro to Javascript',
        instructor: 'Joseph Tool',
        description: `Learn to code in JavaScript, the native language of the web used by developers the world over. Build a single-page web app that persists user data and connects to services like Twitter and Facebook via APIs. Learn the fundamentals of object-oriented programming while receiving support from industry experts and a community of peers.`,
        reviewId: 1

    })

    const sei = await Courses.create({
        name: 'Software Engineering Immersive',
        instructor: 'Bruno Boss',
        description: `Dive into the software development environment and the basics of computing, networks, and data structures. You will discover how to build applications that meet user needs, model data, develop wireframes, and work collaboratively through version control. You will also learn to build applications from the ground up using key languages and frameworks. Write high-quality JavaScript and leverage JS libraries like React to build a dynamic front-end. Incorporate functionality from third-party APIs and add complexity and nuance with Ruby on Rails, Python, Django, and more. Discover how to effectively communicate and collaborate with development teams to carry out projects from concept to completion. Finally, you will work as a team in Git and GitHub while executing software engineering projects in an Agile development workflow.`,
        reviewId: 2
    })

    const dataScience = await Courses.create({
        name: 'Data Science',
        instructor: 'Dan Ack',
        description: `Students will use Python to mine datasets and predict patterns. They will also build statistical models — regression and classification — that generate usable information from raw data. Finally, students will master the basics of machine learning and harness the power of data to forecast what's next.`,
        reviewId: 3
    })

    const ux = await Courses.create({
        name: 'User Experience',
        instructor: 'Jessy James',
        description: `The User Experience Designer (UXD) plays a critical role in today's Experience Economy. With digital, human-centered products and services at the forefront of this economy, this workshop aims at understanding humans on a fundamental level as it applies to design, how to perform user research and testing as part of an iterative design cycle along with various design processes and who is involved. Additionally, students will learn core UX concepts and terminology, practice conducting UX research, sketch interfaces, and build a digital prototype.`,
        reviewId: 4
    })

    const digitalMarketing = await Courses.create({
        name: 'Digital Marketing',
        instructor: 'Mason Way',
        description: `Gain proficiency in social advertising and use Facebook, Google AdWords, and Google Analytics to find meaning in user behavior. Develop and plan a campaign driven by data and paid-search strategies--and measured by key performance indicators. Become a driver of your company's bottom line by using cutting-edge techniques and platforms to market products and acquire users`,
        reviewId: 5
    })

    const reviewOne = await Reviews.create({
        courseId: 1,
        name: 'Javascript Review',
        review: 'I learned a lot from this course, the teacher was very bro-ish and looked like a tool. His name says it all'
    })

    const reviewTwo = await Reviews.create({
        courseId: 2,
        name: 'SEI Review',
        review: 'This is a very challenging course, a lot of preparation was needed in order to hit the ground running. If you choose to do this course, please make sure to have background knowledge of technical languages'
    })

    const reviewThree = await Reviews.create({
        courseId: 3,
        name: 'Data Science Review',
        review: 'You can make a lot of money in Data Science, after you graduate from this course. GET DAT MONEY!'
    })

    const reviewFour = await Reviews.create({
        courseId: 4,
        name: 'UX Review ',
        review: 'I am a hipster by nature, and this class was right up my alley. I can be as creative as I want, backing it with data and knowledge from this course. HIGHLY RECOMMEND!'
    })

    const reviewFive = await Reviews.create({
        courseId: 5,
        name: 'Digital Marketing Review',
        review: 'I think I can change the world knowing how to market digitally, especially swaying votes when it comes to election season! MUST DO THIS COURSE!'
    })

    const reviewSix = await Reviews.create({
        courseId: 1,
        name: 'Javascript Review 2',
        review: 'This course is cool'
    })

    const reviewSeven = await Reviews.create({
        courseId: 2,
        name: 'SEI Review 2',
        review: 'This course is challenging'
    })

    const reviewEight = await Reviews.create({
        courseId: 3,
        name: 'Data Science Review 2',
        review: 'This course is analytical'
    })

    const reviewNine = await Reviews.create({
        courseId: 4,
        name: 'UX Review 2',
        review: 'This course is creative'
    })

    const reviewTen = await Reviews.create({
        courseId: 5,
        name: 'Digital Marketing Review 2',
        review: 'This course is business oriented'
    })

    const bob = await User.create({
        name: 'Bob Barker',
        email: 'bob@gmail.com',
        password: '123'

    })

    const george = await User.create({
        name: 'George Esparza',
        email: 'g@gmail.com',
        password: '1234'

    })

    const ben = await User.create({
        name: 'Ben Rosner',
        email: 'b@gmail.com',
        password: '567'

    })

    const destin = await User.create({
        name: 'Destin Coleman',
        email: 'd@gmail.com',
        password: '8910'

    })

    const matt = await User.create({
        name: 'Matt Seech',
        email: 'm@gmail.com',
        password: '0987'

    })



    }catch(error) {
        console.error(error)
        throw error
    }
    finally {
        process.exit()
    }

}

main()



const { Courses, Reviews } = require('../database/models')

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
        name: 'javascript',
        instructor: 'Joseph Tool',
        reviewId: 1
    })

    const sei = await Courses.create({
        name: 'sei',
        instructor: 'Bruno Boss',
        reviewId: 2
    })

    const html = await Courses.create({
        name: 'html',
        instructor: 'Frank End',
        reviewId: 3
    })

    const server = await Courses.create({
        name: 'servers',
        instructor: 'Bob End',
        reviewId: 4
    })

    const middleWare = await Courses.create({
        name: 'middleware',
        instructor: 'Mason Way',
        reviewId: 5
    })

    const reviewOne = await Reviews.create({
        courseId: 1,
        review: 'No way jose'
    })

    const reviewTwo = await Reviews.create({
        courseId: 2,
        review: 'SEI is hard'
    })

    const reviewThree = await Reviews.create({
        courseId: 3,
        review: 'HTML is easy'
    })

    const reviewFour = await Reviews.create({
        courseId: 4,
        review: 'Servers suck'
    })

    const reviewFive = await Reviews.create({
        courseId: 5,
        review: 'Middle ware what?'
    })

    }catch(error) {
        console.error(error)
        throw error
    }

}

main()

//mattpheus

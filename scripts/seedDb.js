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

    
    }catch(error) {
        console.error(error)
        throw error
    }

}

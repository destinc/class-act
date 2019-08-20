const { db } = require('../database/models')

const main = async () => {
    try{
        await db.sync ({force: true })
    }
    catch(error){
        console.error(error)
        throw error
    }
    finally{
        process.exit()
    }
}

main()
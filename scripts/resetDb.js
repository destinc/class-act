const { db } = require('../database/models')

const main = async () => {
    await db.sync ({force: true })
}

main()
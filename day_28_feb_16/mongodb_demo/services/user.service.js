const { getDB } = require('../config/db.config');

const getAllUsers = async () => {
    const db = getDB();
    console.log('db ', db)
    return await db.collection('users').find().toArray();
}

module.exports = {
    getAllUsers
}
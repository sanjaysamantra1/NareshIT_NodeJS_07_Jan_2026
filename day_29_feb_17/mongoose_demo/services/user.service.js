const userModel = require('../models/user.model')

const getAllUsers = async () => {
    return await userModel.find().lean();
}
const getUserById = async (id) => {
    return await userModel.findById(id).lean();
}

const createUser = async (userData) => {

}

const updateUser = async (id, userData) => {

}

const deleteUser = async (id) => {

}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
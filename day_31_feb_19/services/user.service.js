import userModel from '../models/user.model'

const getAllUsers = async () => {
    return await userModel.find().lean();
}
const getUserById = async (id) => {
    try {
        return await userModel.findById(id).lean();
    } catch (err) {
        console.log(err)
    }
}

const createUser = async (userData) => {
    let createdUser = await userModel.create(userData);
    return createdUser._id;
}

const updateUser = async (id, userData) => { // PATCH
    return await userModel.findByIdAndUpdate(id, userData)
}

const replaceUser = async (id, userData) => { // PUT

}

const deleteUser = async (id) => {
    return await userModel.findByIdAndDelete(id)
}

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    replaceUser
}
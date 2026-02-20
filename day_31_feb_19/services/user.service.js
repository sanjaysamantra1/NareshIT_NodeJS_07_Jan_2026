import userModel from '../models/user.model.js'
import { getFromCache, setInCache } from '../utils/redis_util.js'

const getAllUsers = async () => {
    const cacheKey = 'users:all';
    const cachedUsers = await getFromCache(cacheKey);
    if (cachedUsers) {
        return { source: 'REDIS', data: cachedUsers }
    }
    let users = await userModel.find().lean();
    await setInCache(cacheKey, users);
    return { source: 'DataBase', data: users };
}
const getUserById = async (id) => {
    const cacheKey = `user:${id}`;
    const cachedUser = await getFromCache(cacheKey);
    if (cachedUser) {
        return { source: 'REDIS', data: cachedUser }
    }
    try {
        let userData = await userModel.findById(id).lean();
        await setInCache(cacheKey, userData);
        return { source: 'DataBase', data: userData };
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
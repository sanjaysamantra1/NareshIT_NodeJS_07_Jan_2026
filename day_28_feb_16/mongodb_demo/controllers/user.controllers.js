const userService = require('../services/user.service');

const fetchUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    fetchUsers
}
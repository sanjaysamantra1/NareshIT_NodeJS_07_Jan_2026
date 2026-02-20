import userService from '../services/user.service.js'
export const fetchUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const fetchUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) {
            return res.status(204).json({ message: 'User Not Found' })
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createUser = async (req, res) => {
    try {
        const userId = await userService.createUser(req.body);
        res.status(201).json({ message: 'User Created', userId });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateUser = async (req, res) => {
    try {
        const isUpdated = await userService.updateUser(req.params.id, req.body);
        if (!isUpdated) {
            res.status(204).json({ message: 'User Not Found' })
        } else {
            res.status(200).json({ message: 'User Updated Successfully' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const isDeleted = await userService.deleteUser(req.params.id);
        if (!isDeleted) {
            res.status(204).json({ message: 'User Not Found' })
        } else {
            res.status(200).json({ message: 'User Deleted Successfully' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


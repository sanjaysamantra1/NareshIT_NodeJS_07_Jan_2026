let users = [
    { "id": 1, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "id": 2, "name": "geeta", "sal": 8000, "gender": "female" },
    { "id": 3, "name": "sameer", "sal": 7000, "gender": "male" },
    { "id": 4, "name": "sita", "sal": 9000, "gender": "female" },
    { "id": 5, "name": "deepak", "sal": 8000, "gender": "male" }
];
const getAllUsers = (req, res) => {
    res.json(users)
}
const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const userObj = users.find(user => user.id == userId);
    if (userObj) {
        res.json(userObj)
    } else {
        res.status(204).json({ message: 'User Not Found' })
    }
}
const createNewUser = (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser)
}
module.exports = {
    getAllUsers,
    getUserById,
    createNewUser
}
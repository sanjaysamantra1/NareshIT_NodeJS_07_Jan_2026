const express = require('express');
const app = express();
app.use(express.json()); // to collect request body

let users = [
    { "id": 1, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "id": 2, "name": "geeta", "sal": 8000, "gender": "female" },
    { "id": 3, "name": "sameer", "sal": 7000, "gender": "male" },
    { "id": 4, "name": "sita", "sal": 9000, "gender": "female" },
    { "id": 5, "name": "deepak", "sal": 8000, "gender": "male" }
];
// Get All Users
app.get('/users', (req, res) => {
    res.json(users)
})
// get 1 user (Path Param)
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userObj = users.find(user => user.id == userId);
    if (userObj) {
        res.json(userObj)
    } else {
        res.status(404).json({ message: 'User Not Found' })
    }
})
// Add a new user
app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser)
});

app.listen(3000, () => {
    console.log('server running at port 3000')
})
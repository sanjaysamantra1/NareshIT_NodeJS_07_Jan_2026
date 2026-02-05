const express = require('express');
const app = express();
app.use(express.json()); // to read json data from request body
// application level middleware 

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
    const userId = parseInt(req.params.id); // "1"
    const userObj = users.find(user => user.id == userId);
    if (userObj) {
        res.json(userObj)
    } else {
        res.status(404).json({ message: 'User Not Found' })
    }
})

// Get Data Using Query Param . localhost:3000/userData?gender=male
app.get('/userData', (req, res) => {
    console.log(req.query)
    const gender = req.query.gender;
    let result = users.filter(emp => emp.gender === gender);
    if (result.length) {
        return res.json(result)
    } else {
        return res.status(204).send({ message: 'no users found' })
    }
})

app.listen(3000, () => {
    console.log('server running at port 3000')
})
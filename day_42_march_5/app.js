const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jsonwebtoken = require('jsonwebtoken');
const mongoose = require('mongoose');
const userModel = require('./user_model');

const app = express();
app.use(express.json())
app.use(cors())

// Connect database
console.log('I am Connecting To ', process.env.DB_URL);
mongoose.connect('mongodb://localhost:27017/nareshit_jan_2026')
console.log('MongoDB Connected successfully');



// Register
app.post('/api/auth/register', async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
        res.send('User Added Successfully!!!')
    } catch (err) {
        console.log(err)
    }
})
// Login
app.post('/api/auth/login', async (req, res) => {
    try {
        let user = await userModel.findOne({ email: req.body.email });
        if (!user) {
            res.send({ auth: false, msg: 'No User found, plz register' })
        } else {
            const passValid = bcrypt.compareSync(req.body.password, user.password);
            if (!passValid) res.send({ auth: false, msg: 'Invalid password' })

            // if password is valid
            let token = jsonwebtoken.sign({ id: user._id }, 'mySecretCode', {
                expiresIn: 60 * 2
            });
            res.send({ auth: true, token, expiresIn: 60 * 2 })
        }
    } catch (err) {
        console.log(err)
    }
})


// get all users (Public API )
app.get('/api/auth/users', async (req, res) => {
    let users = await userModel.find({});
    res.json(users);
})

// get all users (Private API - Needs JWT Token )
app.get('/api/auth/employees', async (req, res) => {
    let token = req.headers['my-token'];
    if (!token) res.send({ auth: false, msg: 'No Token Provided' })

    // check right token or not
    try {
        let user = jsonwebtoken.verify(token, 'mySecretCode');
        res.send({ auth: true, data: 'Employees data after JWT is verified' })
    } catch (err) {
        console.log(err);
        res.send({ auth: false, msg: 'invalid token' })
    }
})


app.listen(5000, () => {
    console.log('server running')
})
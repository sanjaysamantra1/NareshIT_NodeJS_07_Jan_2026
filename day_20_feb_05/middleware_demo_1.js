const express = require('express');
const users = require('../data/users.json')
const employees = require('../data/employees.json')
const products = require('../data/products.json')

const loggerMiddleware = (req, res, next) => {
    console.log('I am Logger middleware');
    console.log(`Method: ${req.method}  URL: ${req.url}  Time: ${new Date().toLocaleTimeString()}`)
    next();
}
const app = express();
app.use(loggerMiddleware); // for all the routes

// Home Route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express Routing Example, This is Home Page</h1>')
})

// Users Route
app.get('/users', loggerMiddleware, (req, res) => {
    console.log('This is User route')
    res.json(users);
})

// Employees Route
app.get('/employees', (req, res) => {
    res.json(employees);
})

// products Route
app.get('/products', (req, res) => {
    res.json(products);
})

app.listen(3000, () => {
    console.log(`Server running on 3000 port`)
})
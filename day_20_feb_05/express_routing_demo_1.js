const express = require('express');
const users = require('../data/users.json')
const employees = require('../data/employees.json')
const products = require('../data/products.json')

const app = express();

// Home Route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express Routing Example, This is Home Page</h1>')
})

// Users Route
app.get('/users', (req, res) => {
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
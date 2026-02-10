const express = require('express');
const users = require('../data/users.json')
const employees = require('../data/employees.json')
const products = require('../data/products.json')
const winston = require('winston');

const app = express();


// Configure Winston logger
const logger = winston.createLogger({
  level: 'info', // Log level: 'error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(), // Log to the console
    new winston.transports.File({ filename: 'app.log' }) // Log to a file
  ]
});

// Middleware to log each request
app.use((req, res, next) => {
  logger.info(`HTTP ${req.method} ${req.url}`);
  next();
});


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


// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(`Error: ${err.message}`);
  res.status(500).send('Something went wrong!');
});
app.listen(3000, () => {
    console.log(`Server running on 3000 port`)
})
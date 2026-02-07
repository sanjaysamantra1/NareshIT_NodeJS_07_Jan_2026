const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json()); // to collect request body
app.use(cors());

let employees = [
    { "id": 1, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "id": 2, "name": "geeta", "sal": 8000, "gender": "female" },
    { "id": 3, "name": "sameer", "sal": 7000, "gender": "male" },
    { "id": 4, "name": "sita", "sal": 9000, "gender": "female" },
    { "id": 5, "name": "deepak", "sal": 8000, "gender": "male" }
];

let myErrorHandler = (err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong, Try again!';
    res.status(errorStatus).json({
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
        success: false,
    });
};


// Get All employees
app.get('/employees', (req, res) => {
    res.json(employees)
})
// get 1 employee (Path Param)
app.get('/employees/:id', (req, res, next) => {
    try {
        if (isNaN(req.params.id)) {
            throw new Error('Path Param is Not a Number')
        }
        const employeeId = parseInt(req.params.id);
        const employeeObj = employees.find(employee => employee.id == employeeId);
        if (employeeObj) {
            res.json(employeeObj)
        } else {
            res.status(404).json({ message: 'employee Not Found' })
        }
    } catch (err) {
        next(err); // transfer the control to error middleware
    }

})
// Add a new employee
app.post('/employees', (req, res) => {
    const newemployee = req.body;
    employees.push(newemployee);
    res.status(201).json(newemployee)
});

app.use(myErrorHandler); // added Error handling middleware

app.listen(3000, () => {
    console.log('server running at port 3000')
})
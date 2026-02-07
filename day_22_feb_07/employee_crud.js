const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json()); // to collect request body
app.use(cors());

let employees = require('../data/employees.json')

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
    let { page = 1, limit = 10, sortBy = 'id', order = 'asc', gender } = req.query; // object de-structuring

    // Filter
    let filteredData = [...employees];
    if (gender) { // filter is required
        filteredData = filteredData.filter(emp => emp.gender === gender);
    }

    // Sort
    filteredData.sort((emp1, emp2) => {
        if (order == 'asc') {
            return emp1[sortBy] > emp2[sortBy] ? 1 : -1;
        } else {
            return emp1[sortBy] > emp2[sortBy] ? -1 : 1;
        }
    });

    // pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedData = filteredData.slice(startIndex, endIndex);
    res.json({
        totalRecords: filteredData.length,
        page,
        limit,
        data: paginatedData
    })
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
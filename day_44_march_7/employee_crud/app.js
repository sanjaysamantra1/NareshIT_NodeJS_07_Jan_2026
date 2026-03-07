const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

/* -----------------------------
   MongoDB Connection
------------------------------*/
mongoose.connect('mongodb://localhost:27017/nareshit_jan_2026')
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));


/* -----------------------------
   Employee Schema
------------------------------*/
const employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    department: String,
    salary: Number
});

const Employee = mongoose.model("Employee", employeeSchema);


/* -----------------------------
   CREATE Employee
------------------------------*/
app.post("/employees", async (req, res) => {

    try {
        const emp = new Employee(req.body);
        const savedEmp = await emp.save();
        res.json(savedEmp);
    }
    catch (err) {
        res.status(500).json(err);
    }

});


/* -----------------------------
   GET All Employees
------------------------------*/
app.get("/employees", async (req, res) => {

    try {
        const employees = await Employee.find();
        res.json(employees);
    }
    catch (err) {
        res.status(500).json(err);
    }

});


/* -----------------------------
   GET Employee By ID
------------------------------*/
app.get("/employees/:id", async (req, res) => {

    try {
        const employee = await Employee.findById(req.params.id);
        res.json(employee);
    }
    catch (err) {
        res.status(500).json(err);
    }

});


/* -----------------------------
   UPDATE Employee
------------------------------*/
app.put("/employees/:id", async (req, res) => {

    try {
        const updatedEmp = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updatedEmp);
    }
    catch (err) {
        res.status(500).json(err);
    }

});


/* -----------------------------
   DELETE Employee
------------------------------*/
app.delete("/employees/:id", async (req, res) => {

    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({ message: "Employee deleted" });
    }
    catch (err) {
        res.status(500).json(err);
    }

});


/* -----------------------------
   Start Server
------------------------------*/
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
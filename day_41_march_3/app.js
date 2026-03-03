const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');
const authRoutes = require('./routes/auth_routes')
const employeeRoutes = require('./routes/employee_routes');

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/auth', authRoutes);
app.use('/employees', employeeRoutes);


app.listen(5000, async () => {
    await connectDB();
    console.log('server running at 5000 port')
})
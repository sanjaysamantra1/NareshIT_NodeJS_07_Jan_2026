const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/nareshit_jan_2026');
        console.log('Database connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectDB;

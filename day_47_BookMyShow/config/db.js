const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const DB_URL = 'mongodb://localhost:27017/nareshit_bookmyshow'
    const conn = await mongoose.connect(process.env.MONGO_URI || DB_URL);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/nareshit_jan_2026')
        console.log('MongoDB Connected successfully');
    } catch (err) {
        console.log(err)
    }
}

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    sal: { type: Number, required: true }
})

const User = mongoose.model('User', userSchema);
export default User;

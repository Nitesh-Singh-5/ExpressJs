import mongoose from 'mongoose';

// Defining schema 
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true,unique:true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true,trim:true },
    join: { type: Date, default: Date.now }
})

// Compiling Schema
const UserModel = mongoose.model('user', userSchema);



export default UserModel;
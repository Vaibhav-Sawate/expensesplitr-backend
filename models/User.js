const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add your name']  // We can add custom error messages
    },
    email:{
        type: String,
        required: [true, 'Please add email'],
        unique: true,
        lowercase: true
    },
    password:{
        type: String, // We store hashed pasword so string
        required: [true, 'Please add a password']
    }
}, {   //incase you wnt to add 'creeatedAt and 'updatedAt fields
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
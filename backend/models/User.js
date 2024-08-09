// backend/models/User.js
const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;

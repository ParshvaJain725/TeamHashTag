// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// POST route to handle new user registration
router.post('/register', registerUser);

// POST route to handle existing user login
router.post('/login', loginUser);

module.exports = router;
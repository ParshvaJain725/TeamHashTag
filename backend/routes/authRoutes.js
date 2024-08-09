const express = require('express');
const router = express.Router();
const { registerOrLoginUser } = require('../controllers/authController.js'); // Updated import

// POST route to handle user registration or login
router.post('/register', registerOrLoginUser);

// POST route to handle existing user login
router.post('/login', registerOrLoginUser);

module.exports = router;

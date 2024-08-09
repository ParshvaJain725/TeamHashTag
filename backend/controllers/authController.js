// backend/controllers/authController.js
const User = require('../models/User');

// Handle creating a new user or returning an existing user
exports.registerOrLoginUser = async (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    try {
        // Check if the user already exists
        let user = await User.findOne({ username });

        if (!user) {
            // If user does not exist, create a new user
            user = new User({ username });
            await user.save();
        }

        return res.status(200).json({ message: 'User registered successfully', user });
    } catch (err) {
        return res.status(500).json({ error: 'Server error, please try again later' });
    }
};

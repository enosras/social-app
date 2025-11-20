    const express = require('express');
    const router = express.Router();
    const User = require('../models/User'); // Import your User model

console.log("testing 1")
    // Get all users
    router.get('/', async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    // Add more routes for creating, updating, and deleting users

    module.exports = router;

    require('dotenv').config(); // Load environment variables from .env
    console.log("test 1")
    const express = require('express');
    const mongoose = require('mongoose');
    const app = express();
    const PORT = process.env.PORT || 3000;
    const MONGODB_URI = process.env.MONGODB_URI;

    console.log("test 2")
    // Middleware to parse JSON requests
    app.use(express.json());

    // Connect to MongoDB
    mongoose.connect(MONGODB_URI)
        .then(() => console.log('MongoDB connected successfully'))
        .catch(err => console.error('MongoDB connection error:', err));

    // Basic route for testing
    app.get('/', (req, res) => {
        res.send('Welcome to your Express server!');
    });

    // Start the server
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

    const userRoutes = require('./routes/UserRoutes'); // Import your user routes

    app.use('/api/users', userRoutes); 




    
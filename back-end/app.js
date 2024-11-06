// Import necessary modules
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// Define the port, use environment variable if available
const PORT = process.env.PORT || 5001;

// Import external routes
const testRoute = require('./routes/testroute.js');

// Middleware setup
app.use(morgan('dev')); // Log HTTP requests
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Default test route for root path
app.get('/', (req, res) => {
    res.send('Hello world');
});

// Register external routes
app.use('/test', testRoute); // Example route; can be changed or expanded as needed

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

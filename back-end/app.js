const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
require('dotenv').config();
const testRoute = require('./routes/testroute.js');
const pinRoutes = require('./routes/pinroutes.js');
const authRoutes = require('./routes/authroutes.js');  
const mapRoutes = require('./routes/maproutes.js');
const userRoute = require('./routes/userroutes.js');
const friendRoutes = require('./routes/friends.js');
const feedbackRoutes =require('./routes/feedbackroutes.js');
const contactRoutes =require('./routes/contactroutes.js');

// mongoose models for MongoDB data manipulation
const mongoose = require('mongoose')
// const User = require('./models/User.js')

// connect to the database
// console.log(`Conneting to MongoDB at ${process.env.MONGODB_URI}`)
try {
  mongoose.connect(process.env.MONGODB_URI)
  console.log(`Connected to MongoDB.`)
} catch (err) {
  console.log(
    `Error connecting to MongoDB user account authentication will fail: ${err}`
  )
}

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5001;

// Middleware setup
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default test route for root path
app.get('/', (req, res) => {
    res.send('Hello world');
});

// Register routes
app.use('/test', testRoute);

app.use('/api', pinRoutes); 
app.use('/api', mapRoutes); 
app.use('/auth', authRoutes); 
app.use('/user', userRoute);
app.use('/friends', friendRoutes);
app.use('/feedback',feedbackRoutes)
app.use('/contact',contactRoutes)


// Start the server if this file is run directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app;




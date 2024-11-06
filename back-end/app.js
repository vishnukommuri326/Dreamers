// import express
const express = require('express') 
const app = express()
const path = require('path')
const PORT = 5001;
// import external routes
const testRoute = require('./routes/testroute.js');

// import middleware
const axios = require('axios')
require('dotenv').config({ silent: true }) 
const morgan = require('morgan') 

// use the morgan middleware to log all incoming http requests
app.use(morgan('dev'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// default test route
app.get('/', (req, res) => {
  res.send('Hello world');
});

// register external routes
app.use('/test', testRoute); // the path can be named anything ex: /api/test, /dogs, etc

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

module.exports = app
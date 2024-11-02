// import express
const express = require('express') 
const app = express()
const path = require('path')
const PORT = 5001;

// import middleware
const axios = require('axios')
require('dotenv').config({ silent: true }) 
const morgan = require('morgan') 

// use the morgan middleware to log all incoming http requests
app.use(morgan('dev'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// routes
// app.use('/api', routes);

// test route
app.get('/', (req, res) => {
  res.send('Hello world');
});

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

module.exports = app
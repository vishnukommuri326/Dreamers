const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // hardcoded JSON data
    const data = {
      message: 'Hello World!'
    };
  
    // send JSON data to the frontend
    res.json(data);
  });
  
  // export
  module.exports = router;

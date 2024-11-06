const express = require('express');
const router = express.Router();


const pins = [
    {
        id: 1, 
        userId: 123,
        message: 'Where it all begins.', 
        location: [40.7309, -73.9973] 

    },

    {
        id: 2, 
        userId: 123,
        message: 'I am another default pin', 
        location: [40.7326, -73.9973] 

    },

    {
        id: 3, 
        userId: 456,
        message: 'I am a thurd default pin', 
        location: [40.7309, -73.9980] 

    },

];

// get all pins
router.get('/pins', (req, res) => {
    res.json(pins);
});

// get all pins for user
router.get('/pins/user/:userId', (req, res) => {
    const userPins = pins.filter(p => p.userId === parseInt(req.params.userId));
    res.json(userPins);
});

module.exports = router;
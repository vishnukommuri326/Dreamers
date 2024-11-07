const express = require('express');
const router = express.Router();

// Hardcoded pins for demonstration
const pins = [
  { id: 1, userId: 123, message: 'Where it all begins.', location: [40.7309, -73.9973] },
  { id: 2, userId: 123, message: 'Another memory.', location: [40.7326, -73.9973] },
  { id: 3, userId: 456, message: 'A third memory.', location: [40.7309, -73.9980] },
];

// Get all pins
router.get('/pins', (req, res) => {
  res.json(pins);
});

// Get all pins for a specific user
router.get('/pins/user/:userId', (req, res) => {
  const userPins = pins.filter(pin => pin.userId === parseInt(req.params.userId));
  res.json(userPins);
});

// Get a pin by its ID
router.get('/pins/:id', (req, res) => {
  const pin = pins.find(pin => pin.id === parseInt(req.params.id));
  if (pin) {
    res.json(pin);
  } else {
    res.status(404).json({ error: 'Pin not found' });
  }
});

// Post new pin
router.post('/pins', (req, res) => {
  const newPin = {
    id: pins.length + 1,
    userId: req.body.userId,
    message: req.body.message,
    location: req.body.location,
  };
  pins.push(newPin);
  res.status(201).json(newPin);
});

// Update an existing pin by ID
router.put('/pins/:id', (req, res) => {
  const pin = pins.find(pin => pin.id === parseInt(req.params.id));
  if (pin) {
    pin.message = req.body.message || pin.message;
    pin.location = req.body.location || pin.location;
    res.json(pin);
  } else {
    res.status(404).json({ error: 'Pin not found' });
  }
});

// Delete a pin by ID
router.delete('/pins/:id', (req, res) => {
  const index = pins.findIndex(pin => pin.id === parseInt(req.params.id));
  if (index !== -1) {
    pins.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Pin not found' });
  }
});

// Additional route to return mock pins dynamically
router.get('/pins/mock', (req, res) => {
  const mockPins = [
    { id: 101, userId: 111, message: 'Mock memory 1.', location: [40.7419, -73.9850] },
    { id: 102, userId: 112, message: 'Mock memory 2.', location: [40.7420, -73.9840] },
    { id: 103, userId: 113, message: 'Mock memory 3.', location: [40.7430, -73.9830] },
  ];
  res.json(mockPins);
});

// Route to search pins by keyword in the message
router.get('/pins/search', (req, res) => {
  const { keyword } = req.query;
  if (!keyword) {
    return res.status(400).json({ error: 'Keyword query parameter is required' });
  }
  const matchingPins = pins.filter(pin => pin.message.toLowerCase().includes(keyword.toLowerCase()));
  res.json(matchingPins);
});

// Route to fetch the latest N pins
router.get('/pins/latest/:count', (req, res) => {
  const count = parseInt(req.params.count, 10);
  if (isNaN(count) || count <= 0) {
    return res.status(400).json({ error: 'Count parameter must be a positive number' });
  }
  const latestPins = pins.slice(-count);
  res.json(latestPins);
});

module.exports = router;

const mongoose = require('mongoose');

const pinSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // reference the user schema
        required: false,
    },
    username: {
        type: String, // Use String instead of ObjectId
        required: false, // Make it required if every pin must have a username
    },
    message: {
        type: String,
        required: true,
    },
    location: {
        type: [Number], // [lat, lng]
        required: true,
        validate: {
            validator: function (v) {
                return v.length === 2; 
            },
            message: 'Location must be an array of two numbers [latitude, longitude].',
        },
    },
}, { timestamps: true });

const Pin = mongoose.model('Pin', pinSchema);

module.exports = Pin;

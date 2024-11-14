const express = require('express');
const router = express.Router();
const app = express();
app.use(express.json({ limit: '10mb' })); //If needed- adjust size limit
app.use(express.urlencoded({ limit: '10mb', extended: true }));


// Hardcoded mock users for demonstration
const users = [
    {
        id: 1,
        username: 'Dreamer1',
        password: 'password123',
        aboutMe: 'Hello! I am Dreamer1.',
        number: '123-456-7890',
        otherSocialMedia: 'https://example.com/dreamer1',
        friendsList: ['Alice', 'Bob', 'Charlie'],
        profilePhoto: null,
    },
    {
        id: 2,
        username: 'Dreamer2',
        password: 'password456',
        aboutMe: 'Hello! I am Dreamer2.',
        number: '234-567-8901',
        otherSocialMedia: 'https://example.com/dreamer2',
        friendsList: ['Dave', 'Eve', 'Frank'],
        profilePhoto: null,
    },
    {
        id: 3,
        username: 'Dreamer3',
        password: 'password789',
        aboutMe: 'Hello! I am Dreamer3.',
        number: '345-678-9012',
        otherSocialMedia: 'https://example.com/dreamer3',
        friendsList: ['Grace', 'Hank', 'Ivy'],
        profilePhoto: null,
    }
];

// Route to get user settings by username
router.get('/settings/:username', (req, res) => {
    const { username } = req.params;
    const user = users.find(u => u.username === username);

    if (user) {
        res.status(200).json({
            username: user.username,
            aboutMe: user.aboutMe,
            number: user.number,
            otherSocialMedia: user.otherSocialMedia,
            friendsList: user.friendsList,
            profilePhoto: user.profilePhoto,
        });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// Route to update user settings
router.put('/settings/:username', (req, res) => {
    const { username } = req.params;
    const { aboutMe, number, otherSocialMedia, friendsList, profilePhoto } = req.body;
    const user = users.find(u => u.username === username);

    if (user) {
        // Update user information with data from request body, or keep existing values if not provided
        user.aboutMe = aboutMe || user.aboutMe;
        user.number = number || user.number;
        user.otherSocialMedia = otherSocialMedia || user.otherSocialMedia;
        user.friendsList = friendsList || user.friendsList;

        if (profilePhoto === null || profilePhoto === undefined) { // if the profile photo is explicitly cleared (You had an image, removed it, then saved)
            user.profilePhoto = null;
        }else{
            user.profilePhoto = profilePhoto || user.profilePhoto;

        }

        res.status(200).json({ message: 'User settings updated successfully', user });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

module.exports = router;
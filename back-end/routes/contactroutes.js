const express = require('express');
const router = express.Router();



let contacts = []; // For demonstration- will replace with MongoDb storage next sprint

router.post("/",(req, res) => {
    const {name, email, message} = req.body

    if (!name || !email || !message){ // if one of the fields are empty
        return res.status(400).json({message: "All fields are required"})
    }

    const newContact ={ // New Contact
        id: contacts.length+1,
        name,
        email,
        message,
        timestamp: new Date()

    };

    contacts.push(newContact) // Add new contact to storage

    res.status(201).json({message:"Contact saved successfully", contact: newContact})

})




router.get("/", (req, res) => {
    res.json(contacts)
})


module.exports = router;

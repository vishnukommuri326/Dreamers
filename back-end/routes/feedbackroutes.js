const express = require('express');
const router = express.Router();



let feedbacks = []; // For demonstration- will replace with MongoDb storage next sprint

router.post("/",(req, res) => {
    const {answer1, answer2, answer3} = req.body

    if (!answer1 || !answer2 || !answer3){ // if one of the answers are empty
        return res.status(400).json({message: "All questions are required"})
    }

    const newFB ={ // New Feedback
        id: feedbacks.length+1,
        answer1,
        answer2,
        answer3,
        timestamp: new Date()

    };

    feedbacks.push(newFB) // Add new feedback to storage

    res.status(201).json({message:"Feedback saved successfully", feedback: newFB})

})




router.get("/", (req, res) => {
    res.json(feedbacks)
})


module.exports = router;

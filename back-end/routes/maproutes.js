const express = require('express');
const router = express.Router();

router.get('/map'), (req, res) => {
    const { view } = req.query;
    try {
        if (view.includes('personal')) {
            
        }
        if (view.includes('friends')) {
            
        }
        
    } catch (error) {
        
    }
}

module.exports = router;
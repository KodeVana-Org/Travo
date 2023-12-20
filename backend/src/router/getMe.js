const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const verifyToken = require('../middleware/verifyToken');

router.get('/me', verifyToken, async (req, res) => {
    try{
        const userId = req.user.id;

        // removed password from the additionalDetails
        const additionalDetails = await User.findOne({ _id: userId }).select('-user').exec();
      
      return res.status(200).json({
        message: 'Additional details found',
        additionalDetails,
      });

    }catch(error){
        console.error('Error fetching my detail', error);
        res.status(500).json({
            error: 'Server error'
        });
    }
})

module.exports = router;
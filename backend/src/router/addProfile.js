const express = require('express');
const router = express.Router();
// const userDetails = require('../models/profile'); 
const User = require('../models/userModel'); 
const ProductDetails = require('../models/product')
const UserDetail = require('../models/profile');
const updateUserDetails = require('../middleware/addDetais')


router.post('/profiles', async (req, res) => {
    try {
      const userId = req.user.id; // Assuming user ID is available in req.user object
      const userDetailsData = {
        profilePic: req.body.image,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        otherDetails: req.body.other 
        
      };
  
      const newUserDetails = await updateUserDetails(userId, userDetailsData);
      await User.findByIdAndUpdate(userId, { $push: { userDetails: newUserDetails._id } });
      res.json({ message: 'User details added and updated', userDetails: newUserDetails });
    } catch (error) {
      console.error('Error adding user details and updating user:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  module.exports = router;

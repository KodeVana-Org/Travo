const express = require('express');
const router = express.Router();
const Profile = require('../models/profile'); 
const User = require('../models/userModel'); 


router.get('/profile', async (req, res) => {
  try {
    const userId = req.user.id; 

    
    const user = await User.findById(userId).populate('purchasedPlaces').populate({
      path: 'userDetails', // Another field to populate
      select: 'phoneNumber address' // Select specific fields from the populated documents
    });

    res.status(200).json({
      message: "data received successfully",
      success: true,
      data: user,
    })
    // res.json({ user });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user profile details (image, address, phone number)
router.put('/profile', async (req, res) => {
  try {
    const userId = req.user.id || req.params; // Assuming you have user details in the req.user object

    // Update user profile details
    const updatedProfile = await Profile.findOneAndUpdate(
      { user: userId }, // Assuming the Profile model has a reference to the User model
      {
        $set: {
          profilePic: req.body.image, // Assuming image URL is sent in the request body
          address: req.body.address, // Assuming address is sent in the request body
          phoneNumber: req.body.phoneNumber // Assuming phone number is sent in the request body
        }
      },
      { new: true, upsert: true }
    );

    res.json({ message: 'Profile updated successfully', profile: updatedProfile });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

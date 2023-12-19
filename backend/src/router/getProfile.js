const express = require('express');
const router = express.Router();
// const userDetails = require('../models/profile'); 
const User = require('../models/userModel'); 
const ProductDetails = require('../models/product')
const UserDetail = require('../models/profile');
const updateUserDetails = require('../middleware/addDetais')


router.get('/profile', async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch user details from UserDetail model
    const userDetails = await UserDetail.findOne({ user: userId }).populate('user').exec();
    if (!userDetails) {
      return res.status(404).json({ message: 'UserDetails not found' });
    }
    const purchaseDetails = await ProductDetails.findOne({ user: userId }).populate('user').exec();
    if (!purchaseDetails) {
      return res.status(404).json({ message: 'purchasedDetails not found' });
    }

    // Return both user details and user information
    res.status(200).json({
      message: 'Data received successfully',
      userDetails,
      purchaseDetails,
      
    });
    
   
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// router.post('/profiles', async (req, res) => {
//   try {
//     const userId = req.user.id; // Assuming user ID is available in req.user object
//     const userDetailsData = {
//       profilePic: req.body.image,
//       address: req.body.address,
//       phoneNumber: req.body.phoneNumber,
//       otherDetails: req.body.other 
      
//     };

//     const newUserDetails = await updateUserDetails(userId, userDetailsData);
//     await User.findByIdAndUpdate(userId, { $push: { userDetails: newUserDetails._id } });
//     res.json({ message: 'User details added and updated', userDetails: newUserDetails });
//   } catch (error) {
//     console.error('Error adding user details and updating user:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });


// Update user profile details (image, address, phone number)
// router.put('/profile', async (req, res) => {
//   try {
//     const userid = req.user.id 
//     console.log(userid)
     

//     // Update user profile details
//     const updatedProfile = await UserDetail.findOneAndUpdate(
//       { user: useid}, // Assuming the Profile model has a reference to the User model
//       {
//         $set: {
//           profilePic: req.body.image, // Assuming image URL is sent in the request body
//           address: req.body.address, // Assuming address is sent in the request body
//           phoneNumber: req.body.phoneNumber // Assuming phone number is sent in the request body
//         }
//       },
//       { new: true, upsert: true }
//     );
//     await User.findByIdAndUpdate(userId, { $push: { userDetails: updatedProfile._id } });
//     res.json({ message: 'Profile updated successfully', profile: updatedProfile });
//   } catch (error) {
//     console.error('Error updating user profile:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

module.exports = router;

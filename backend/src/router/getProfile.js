const express = require('express');
const router = express.Router();
const ProductDetails = require('../models/product')
const UserDetail = require('../models/profile');
const verifyToken = require('../middleware/verifyToken');


router.get('/profile',verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch user details from UserDetail model
    const userDetails = await UserDetail.findOne({ user: userId }).populate('user').exec();
    // const purchaseDetails = await ProductDetails.findOne({ user: userId }).populate('user').exec();
  
    // Check if either userDetails or purchaseDetails is present
    if (userDetails ) {
      // At least one of them exists, send the data
      const responseData = {
        message: 'Data received successfully',
        userDetails: userDetails || null,
        // purchaseDetails: purchaseDetails || null,
      };

       // Remove the 'user' property from 'userDetails' if it exists
    if (responseData.userDetails) {
      responseData.userDetails = { ...responseData.userDetails.toObject() };
      delete responseData.userDetails.user;
    }

      // removing user filed fromt he purchasedDetails
    // if (responseData.purchaseDetails){
    //   responseData.purchaseDetails = {...responseData.purchaseDetails.toObject()};
    //   delete responseData.purchaseDetails.user;
    // }
      return res.status(200).json({
        success: true,
        message: "data received",
        responseData
      });
    } else {
      // Both userDetails and purchaseDetails are not present
      return res.status(200).json({ message: 'No data found' });
    }
    
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;

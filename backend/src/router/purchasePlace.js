const express = require('express');
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const PurchasePlace = require('../models/product');

router.get('/purchase-places', verifyToken, async (req, res) => {
    try {
      const userId = req.user.id;
  
      const purchasePlaces = await PurchasePlace.find({ user: userId }).exec();
  
      if (!purchasePlaces) {
        return res.status(404).json({ message: 'Purchase places not found' });
      }
  
      res.status(200).json({ message: 'Purchase places retrieved successfully', purchasePlaces });
    } catch (error) {
      console.error('Error fetching purchase places:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });

module.exports = router;
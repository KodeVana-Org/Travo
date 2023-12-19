const express = require('express');
const router = express.Router();
const Tour = require('../models/product'); // Import the Tour model

const validateTourData = (req, res, next) => {
    const { placeName, amount,  cardHolderName,id} = req.body;
    if (!placeName || placeName.trim().length === 0 || !amount || !cardHolderName) {
      const missingFields = [];
      if (!placeName || placeName.trim().length === 0) missingFields.push('placeName');
      if (!amount) missingFields.push('amount');
      if (!id) missingFields.push('id');
      if (!cardHolderName) missingFields.push('cardHolderName');
      return res.status(400).json({ error: `Required fields missing: ${missingFields.join(', ')}` });
    }
    next(); // Move to the next middleware/route handler
  };

router.post('/payment-get',validateTourData, async (req, res) => {
  try {
    const { placeName, amount, type, cardHolderName,cardNumber,id,currency ,cvc} = req.body;

    // Create a new Tour instance based on the model
    const newTour = new Tour({
      placeName,
      amount,
      id,
      currency,
      cvc,
      type,
      cardHolderName,
      cardNumber,
    });

    // Save the new tour to the database
    await newTour.save();

    res.status(200).json({ message: 'Tour created successfully', tour: newTour });
  } catch (error) {
    console.error('Error saving tour:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
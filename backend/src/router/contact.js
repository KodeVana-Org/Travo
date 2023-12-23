const Contact = require('../models/contact');
const express = require('express');
const router = express.Router();

router.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
    
        // Create a new contact instance
        const newContact = new Contact({
          name,
          email,
          message,
        });
    
        // Save the contact to the database
        await newContact.save();
    
        res.status(201).json({ message: 'Contact saved successfully', newContact});
      } catch (error) {
        res.status(500).json({ message: 'Error saving contact', error: error.message });
      }
    ;
})

module.exports = router
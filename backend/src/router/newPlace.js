const express = require('express');
const router = express.Router();
const Placess = require('../models/newPlace');
const cloudinary = require('cloudinary').v2;


router.post('/add-places', async (req, res) => {
  try {
    const { name, price, isNew, details} = req.body;
    const imageUrl = req.file.path;

    // Check if required fields are provided
    if (!name || !price || !imageUrl) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Please provide all required fields.",
        });
    }
   
    const result = await cloudinary.uploader.upload(imageUrl, {
      folder: 'kodevana/test',
    });

    const newPlace = new Placess({
      imageUrl: result.secure_url,
      name,
      price,
      isNew,
      details
    });

    const place = await newPlace.save();
    res
      .status(201)
      .json({
        success: true,
        message: "place created successfully.",
        place,
      });
  } catch (error) {
    console.error("Error creating place:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "An error occurred while creating the project.",
      });
  }
});


//get place
router.get('/get-places', async (req, res) => {
  try {
    const places = await Placess.find();
    if(!places){
      return res.status(200).json({
        message:'no places '
      })
    }

    res.status(200).json(places);
  } catch (error) {
    console.error('Error fetching places:', error);
    res.status(500).json({ message: 'Failed to fetch places' });
  }
});

//get single page
router.get('/places/:id', async (req, res) => {
  try {
    const placeId = req.params.id;
    const place = await Placess.findById(placeId); 

    if (!place) {
      return res.status(404).json({ success: false, message: 'Place not found' });
    }

    res.status(200).json({ success: true, data: place });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch place', error: error.message });
  }
});


module.exports = router
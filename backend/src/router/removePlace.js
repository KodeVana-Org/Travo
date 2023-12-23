const express = require('express');
const router = express.Router();
const Place = require('../models/product');
const AnotherModel = require('../models/newPlace')

router.delete("/place-delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const place = await Place.findById(id);
        if (!place) {
            // If not found in the first model, check in the second model
            const anotherModelObject = await AnotherModel.findById(id);
            if (!anotherModelObject) {
                return res.status(404).json({
                    success: false,
                    message: 'ID not found in any model'
                });
            }
            
            await AnotherModel.findByIdAndDelete(id);

            return res.status(200).json({
                success: true,
                message: 'Object deleted from AnotherModel successfully'
            });
        }
        
        await Place.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: 'Object deleted from Place successfully'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to delete place',
            error: error.message
        });
    }
});

module.exports = router;
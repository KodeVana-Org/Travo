const express = require('express');
const router = express.Router();
const Place = require('../models/product');

router.delete("/place-delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const place = await Place.findById(id);
        if (!place) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        
        await Place.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: 'Product deleted successfully'
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
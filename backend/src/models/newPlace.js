const mongoose = require('mongoose');

const newPlaces = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    imageUrl:{
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    isNew: {
        type:Boolean
    },
    details: {
        type: String,
    },
})

const Placess = mongoose.model('Placess', newPlaces);
module.exports = Placess;
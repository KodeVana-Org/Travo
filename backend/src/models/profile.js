const mongoose = require('mongoose');

const ProfileScema = new mongoose.Schema({

    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    profilePic: {
        type: String,
    },
    phoneNumber: {
        type: Number,
    },
    address: {
        type : String,
    }

})

const Profile = mongoose.model('Profile', ProfileScema);

module.exports = Profile;
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
    },
    otherDetails: 
    { type: mongoose.Schema.Types.Mixed} 

})

const UserDetail = mongoose.model('UserDetail', ProfileScema);

module.exports = UserDetail;
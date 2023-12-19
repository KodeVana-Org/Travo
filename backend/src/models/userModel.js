const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    number: { type: Number, default: 0 },

    resetToken: {
        type: String,
    },
    resetTokenExpiration: {
        type: Date,
    },
    userDetails: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Profile' 
        }
      ],
    purchasedPlaces: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product' 
        }
      ],
    expirationTime: {
        type: Date,
    }
    
})
const User = mongoose.model('User', userSchema);

module.exports = User;
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    placeName: String,
    amount: String,
    type:[String],
    cardNumber: Number,
    currency: String,
    cvc: Number,
    date: String,
    cardHolderName: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
      },

    
})



const Product = mongoose.model('Product', productSchema);
module.exports = Product;

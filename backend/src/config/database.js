const mongoose = require('mongoose')
require('dotenv').config();

async function connectToDB() {
  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: process.env.DATABASE_NAME
    });

    console.log(`=> Connected to the database 🌸 << ${process.env.DATABASE_NAME} >> 🌸`);

    // Return the Mongoose connection instance for use in other parts of your application
    return mongoose.connection;
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
    throw err; 
  }
}

module.exports = connectToDB;
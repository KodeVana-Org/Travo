const uri = 'mongodb://localhost:27017/yourDatabaseName';
const mongoose = require('mongoose')
async function connectToDB() {
  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to the database');

    // Return the Mongoose connection instance for use in other parts of your application
    return mongoose.connection;
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
    throw err; 
  }
}

module.exports = connectToDB;
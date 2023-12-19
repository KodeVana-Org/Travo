const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
require('dotenv').config();
// const mongoose = require('mongoose')
const connectToDB = require('../src/config/database')
const PlaceRouter = require('../src/router/productRoute')
const login = require('../src/router/login')
const signup = require('../src/router/signup')
const getProfile = require('../src/router/getProfile');
const verifyToken = require('../src/middleware/verifyToken')
const cors = require('cors');

app.use(express.json());
app.use(cors());
async function someFunction() {
  try {
    const dbConnection = await connectToDB();
    // Perform database operations using the `dbConnection` object (e.g., querying, creating, updating, or deleting data)
  } catch (error) {
    // Handle errors
    console.error(error);
  }
}

someFunction();

// app.use('/', function(req, res){
//   res.send('hellow world')
// })

app.use('/api',login);
app.use('/api',signup);
app.use('/api', verifyToken, getProfile);
app.use('/api', PlaceRouter); 

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
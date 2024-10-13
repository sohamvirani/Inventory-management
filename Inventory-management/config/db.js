// Import mongoose with default settings
const { default: mongoose } = require("mongoose");
require('dotenv').config(); // Load environment variables from .env file

// Connect to MongoDB using the connection string from environment variables
const db = mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to the database successfully");
  })
  .catch(() => {
    console.log("Failed to connect to the database");
  });

module.exports = db;

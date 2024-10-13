const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
require("./config/db");
require("dotenv").config(); // Load environment variables

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importing routes for inventory and suppliers
const inventoryRoutes = require('./routes/inventoryRoutes');
const supplierRoutes = require('./routes/supplierRoutes');

// Set up API endpoints
app.use('/api/inventory', inventoryRoutes);
app.use('/api/suppliers', supplierRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("<center><h1>Welcome to the Inventory Management System</h1><br>Access the API <a href=https://github.com/sohamvirani/Inventory-management target=_blank>Here: Inventory Management System Repository</a></center>");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});

const express = require('express');
const {
    createSupplier,
    getAllSuppliers,
} = require('../controller/supplierController');

const router = express.Router();

// Endpoint to create a new supplier entry
router.post('/', createSupplier);

// Endpoint to retrieve all supplier entries
router.get('/', getAllSuppliers);

module.exports = router;

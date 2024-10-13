const express = require('express');
const upload = require("../utils/csv.upload");
const {
    createInventoryItem,
    getAllInventoryItems,
    updateInventoryItem,
    deleteInventoryItem,
    checkLowStock,
    bulkExport,
    bulkImport,
} = require('../controller/inventoryController');

const router = express.Router();

// Route to add a new inventory item
router.post('/', createInventoryItem);

// Route to fetch all inventory items
router.get('/', getAllInventoryItems);

// Route to modify an existing inventory item
router.put('/:id', updateInventoryItem);

// Route to remove an inventory item
router.delete('/:id', deleteInventoryItem);

// Route to identify items with low stock
router.get('/low-stock', checkLowStock);

// Route for exporting inventory items as a CSV file
router.get('/export', bulkExport);

// Route for importing inventory items from a CSV file
router.post('/import', upload.single('file'), bulkImport);

module.exports = router;

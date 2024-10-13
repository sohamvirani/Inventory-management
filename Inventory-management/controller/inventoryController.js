const Inventory = require('../models/inventoryModel');
const { Parser } = require('json2csv');
const csvParser = require('csv-parser');
const fs = require('fs');

// Add a new item to the inventory
exports.createInventoryItem = async (req, res) => {
    try {
        const newItem = await Inventory.create(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Retrieve all items from the inventory
exports.getAllInventoryItems = async (req, res) => {
    try {
        const allItems = await Inventory.find().populate('supplier');
        res.status(200).json(allItems);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Modify an existing inventory item
exports.updateInventoryItem = async (req, res) => {
    try {
        const updatedItem = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });

        // Verify that the item was located and updated
        if (!updatedItem) {
            return res.status(404).json({ message: "Item not found in inventory" });
        }

        res.status(200).json({
            message: "Item updated successfully",
            item: updatedItem
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Remove an item from the inventory
exports.deleteInventoryItem = async (req, res) => {
    try {
        const removedItem = await Inventory.findByIdAndDelete(req.params.id);

        // Confirm that the item was located and removed
        if (!removedItem) {
            return res.status(404).json({ message: "Item not found in inventory" });
        }

        res.status(200).json({ message: "Item successfully deleted from inventory" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Identify items with low stock
exports.checkLowStock = async (req, res) => {
    try {
        const lowStockItems = await Inventory.find({
            $expr: {
                $lt: ["$quantity", "$lowStockThreshold"]
            }
        });
        res.status(200).json(lowStockItems);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Export inventory items in bulk to a CSV file
exports.bulkExport = async (req, res) => {
    try {
        const allItems = await Inventory.find().populate('supplier');
        const fields = ['name', 'quantity', 'supplier', 'lowStockThreshold', 'isLowStock'];
        const json2csvParser = new Parser({ fields });
        const csv = json2csvParser.parse(allItems);

        res.header('Content-Type', 'text/csv');
        res.attachment('inventory_data.csv');
        res.status(200).send(csv);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Import multiple items from a CSV file
exports.bulkImport = async (req, res) => {
    const importedData = [];
    fs.createReadStream(req.file.path) 
        .pipe(csvParser())
        .on('data', (data) => importedData.push(data))
        .on('end', async () => {
            try {
                await Inventory.insertMany(importedData); 
                res.status(200).json({ message: 'Inventory items imported successfully' });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
            fs.unlinkSync(req.file.path); // Remove the CSV file after importing
        });
};

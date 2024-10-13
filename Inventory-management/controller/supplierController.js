const Supplier = require('../models/supplierModel');

// Add a new supplier to the system
exports.createSupplier = async (req, res) => {
    try {
        const newSupplier = await Supplier.create(req.body);
        res.status(201).json(newSupplier);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Retrieve a list of all suppliers
exports.getAllSuppliers = async (req, res) => {
    try {
        const allSuppliers = await Supplier.find();
        res.status(200).json(allSuppliers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

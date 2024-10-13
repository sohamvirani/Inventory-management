const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Item name is required"] 
    },
    quantity: { 
        type: Number, 
        required: [true, "Quantity is required"], 
        default: 0 
    },
    supplier: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Supplier' // Link to the Supplier model
    },
    lowStockThreshold: { 
        type: Number, 
        required: [true, "Low stock threshold is required"], 
        default: 5 
    },
    isLowStock: { 
        type: Boolean, 
        default: false // Automatically set to false unless specified
    },
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

module.exports = mongoose.model('Inventory', inventorySchema);

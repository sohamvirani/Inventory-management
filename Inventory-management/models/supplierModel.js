const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Supplier name is required"]
    },
    contact: { 
        type: String, 
        required: [true, "Contact information is required"]
    }
}, { 
    timestamps: true // Auto-adds fields for when documents are created or modified
});

module.exports = mongoose.model('Supplier', supplierSchema);

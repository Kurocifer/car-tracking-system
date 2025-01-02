const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    licensePlate: {
        type: String,
        required: true,
        unique: true // Ensure the license plate is unique
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    location: {
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    },
    agencyId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Agency' // Assuming you have an Agency model defined
    }
}, { timestamps: true }); // Optional: adds createdAt and updatedAt fields

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ToursSchema = new Schema({
    TourName: {
        type: String,
        required: true
    },
    Liked: {
        type: String,
        required: true
    },
    TourDesc: {
        type: String,
        required: true
    },
    imgURL: {
        type: String,
        required: true
    }
});

module.exports = Tours = mongoose.model('tours', ToursSchema);

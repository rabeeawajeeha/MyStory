const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const GuidesSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    imgURL: {
        type: String,
        required: true
    }
});

module.exports = Guides = mongoose.model('guides', GuidesSchema);

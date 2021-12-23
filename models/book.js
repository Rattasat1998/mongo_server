const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    name: {
        type: String
    },
    author: {
        type: String
    },
    create_at: {
        type: Date,
        default: Date.now
    },
    updatee_at: {
        type: Date,
        default: Date.now
    },
    
},{ versionKey: false });

module.exports = mongoose.model('books',BookSchema);
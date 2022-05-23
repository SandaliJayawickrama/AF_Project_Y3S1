const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    ID: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    contact: {
        type: String,
        required: true
    },

    passwd: {
        type: String,
        required: true,
        unique: true
    },

    type: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true
    },

    interest: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Users', userSchema);
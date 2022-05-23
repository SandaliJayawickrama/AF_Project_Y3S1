const mongoose = require('mongoose')

const StuGroupSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true
    },

    group_id: {
        type: String,
        required: true,
        unique: true
    },

    members: {
        type: Array,
        default: []
    },

    pannel_status: {
        type: String,
        required: true,
        default: "Not assign"
    },

    pannel: {
        type: Array,
        default: []
    },

    topic: {
        type: Object,
        required: true,
        default: {}
    },

    submissions: {
        type: Array,
        required: true,
        default: []
    },

    marks: {
        type: Array,
        required: true,
        default: []
    }

});

module.exports = mongoose.model('StuGroups', StuGroupSchema);
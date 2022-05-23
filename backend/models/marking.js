const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const markingSchema = new Schema({
    subject : {
        type: String,
        required: true
    },
    assignment:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    point:{
        type: String,
        required: true
    },
    marks:{
        type: String,
        required: true
    }
})

const Marking = mongoose.model("Marking",markingSchema);

module.exports = Marking;
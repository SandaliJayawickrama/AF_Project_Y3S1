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
    },
    point1:{
        type: String,
        required: true
    },
    marks1:{
        type: String,
        required: true
    },
    point2:{
        type: String,
        required: true
    },
    marks2:{
        type: String,
        required: true
    },
    point3:{
        type: String,
        required: true
    },
    marks3:{
        type: String,
        required: true
    }
})

const Marking = mongoose.model("Marking",markingSchema);

module.exports = Marking;
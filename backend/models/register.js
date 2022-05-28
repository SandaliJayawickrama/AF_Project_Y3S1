const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registerSchema = new Schema({
    name : {
        type: String,
        required: true
    },
   id:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    interest:{
        type: String,
        required: true
    }
})

const Register = mongoose.model("Register",registerSchema);

module.exports = Register;

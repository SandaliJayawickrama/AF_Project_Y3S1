const mongoose = require('mongoose') 

//create ResearchTopicSchema
const researchTopicSchema = new mongoose.Schema ({
    gid: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    interest: {
        type: String,
        required: true,
    },
    // status_sup: {
    //     type: String,
    //     default: 'pending'
    // },
    // status_co: {
    //     type: String,
    //     default: 'pending'
    // },
    
}, {
    timestamps: true
})

module.exports = mongoose.model("Research_Topic", researchTopicSchema)
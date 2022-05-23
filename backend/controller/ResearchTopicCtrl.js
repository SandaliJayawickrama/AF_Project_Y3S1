const Research_Topic = require('../models/ResearchTopicModel');

const ResearchTopicCtrl = {

    //get Research_Topic
    getResearch_Topic: async(req, res) =>{
        try {
            const rtopics = await Research_Topic.find()
            res.json(rtopics)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    //add Research_Topic
    createResearch_Topic: async (req, res) => {
        try {
            const {gid,name,interest} = req.body;
            const rtopics = await Research_Topic.findOne({name})
            if(rtopics) return res.status(400).json({msg: "This Research Topic already exists."})

            const newResearch_Topic = new Research_Topic({gid,name,interest})

            await newResearch_Topic.save()
            res.json({msg: "Created a Research Topic"})

        } catch (err) {
            return res.status(500).json({msg: err.message}) 
        }
    },

    //update Research Topic
    updateResearch_Topic: async (req, res) => {
        try {
            const {name} = req.body;
            await Research_Topic.findOneAndUpdate({_id: req.params.id}, {name})

            res.json({msg: "Updated Research Topic"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    //delete Research Topic
    deleteResearch_Topic: async (req, res) => {
        try {
            await Research_Topic.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Research Topic"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}

module.exports = ResearchTopicCtrl;
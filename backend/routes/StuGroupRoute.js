const express = require("express");
const Group = require("../models/StuGroupModel");

const router = express.Router();

router.post("/add", (req, res, next) => {
  const StuGroupModel = new Group({
    user_id: req.body.user_id,
    group_id: req.body.group_id,
    members: req.body.members,
    pannel_status: req.body.pannel_status,
    pannel: req.body.pannel,
    topic: req.body.topic,
    submissions: req.body.submissions,
    marks: req.body.marks
  });
  StuGroupModel.save().then(createdGroup => {
    res.status(201).json({
      message: "Successfully group created",
      GrpId: createdGroup._id
    });
  });
});


router.get("/getdata", async(req,res) => {
  try {
      const allGroups = await Group.find({});
      res.status(200).json(allGroups);
  } catch (err) {
      res.json(err);
  }
})


router.get('/getItem/:id', async(req,res) =>{
  let id = req.params.id;
  Group.findById(id, function(err,group){
    res.json(group);
  });
});


router.post("/update/:id", (req, res, next) => {
  const StuGroupModel = new Group({
    _id: req.body.id,
    user_id: req.body.user_id,
    group_id: req.body.group_id,
    members: req.body.members,
    pannel_status: req.body.pannel_status,
    pannel: req.body.pannel,
    topic: req.body.topic,
    submissions: req.body.submissions,
    marks: req.body.marks
  });
  Group.updateOne({_id: req.params.id }, StuGroupModel).then(result => {
    res.status(200).json({ message: "Successfully Updated!" });
  });
});


router.delete("/delete/:id", (req, res, next) => {
    Group.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({ message: "Group deleted!" });
  });
});


module.exports = router;

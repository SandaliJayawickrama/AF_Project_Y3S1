const router = require("express").Router();
const { route } = require("express/lib/application");
const res = require("express/lib/response");
let Marking =require("../models/marking");

router.route("/add").post((req,res)=>{

    const subject = req.body.subject;
    const assignment = req.body.assignment;
    const date = Date(req.body.date);
    const point= req.body.point;
    const marks = req.body.marks;

    const newMarking = new Marking({

        subject ,
        assignment,
        date,
        point,
        marks
    })
    
    newMarking.save().then(()=>{
        res.json("Marking Added")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/").get((req,res)=>{

    Marking.find().then((markings)=>{
        res.json(markings)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req, res)=>{
    let markingID = req.params.id;
    const{subject,assignment,date,point,marks}= req.body;
     
const updateMarking ={
    subject, 
    assignment,
    date,
    point,
    marks
}


const update = await Marking.findByIdAndUpdate(markingID, updateMarking)
.then(()=>{
    res.status(200).send({status:"User update"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with updating data"});
 })
})


router.route("/delete/:id").delete(async (req,res)=>{
 let markingID = req.params.id;

 await Marking.findByIdAndDelete(markingID)
 .then(()=>{
     res.status(200).send({status:"User deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error : err.message});
    })
})

router.route("/get/:id").get(async (req, res)=>{
    let userId = req.params.id;
    const user = await Marking.findBYId(markingID)
    .then((marking)=>{
        res.status(200).send({status:"User fetched", marking})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error:err.message});
    })
})
module.exports = router;

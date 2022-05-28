const router = require("express").Router();
const { route } = require("express/lib/application");
const res = require("express/lib/response");
let Register =require("../models/register");

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const id = req.body.id;
    const email = req.body.email;
    const contact= Number(req.body.contact);
    const password = req.body.password;
    const type= req.body.type;
    const role = req.body.role;
    const interest= req.body.interest;

    const newRegister = new Register({
        name,
        id,
        email,
        contact,
        password,
        type,
        role,
        interest,
   
     })
    
    
    
     newRegister.save().then(()=>{
        res.json("New Student Added")
    }).catch((err)=>{
        console.log(err);
    })
})


/*router.route("/").get((req,res)=>{

    Register.find().then((registers)=>{
        res.json(registers)
    }).catch((err)=>{
        console.log(err)
    })
})


router.route("/update/:id").put(async (req, res)=>{
    let registerID = req.params.id;
    const{name,id,email,contact,password,type,role,interest}= req.body;
     
const updateRegister ={
    name,
    id,
    email,
    contact,
    password,
    type,
    role,
    interest
}


const update = await Register.findByIdAndUpdate(registerID, updateRegister)
.then(()=>{
    res.status(200).send({status:"User update"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with updating data"});
 })
})


router.route("/delete/:id").delete(async (req,res)=>{
 let registerID = req.params.id;

 await Register.findByIdAndDelete(registerID)
 .then(()=>{
     res.status(200).send({status:"User deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error : err.message});
    })
})

router.route("/get/:id").get(async (req, res)=>{
    let registerID = req.params.id;
    const user = await Marking.findBYId(registerID)
    .then((register)=>{
        res.status(200).send({status:"User fetched", register})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error:err.message});
    })
})*/

module.exports = router;




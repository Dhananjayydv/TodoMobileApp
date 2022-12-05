const express = require('express');
const router = express.Router();
const User = require('../model/user')


router.get('/',(req,res)=>{
    async function findUser(){
        const Users = await User.find()
        res.send(Users);
        // console.log(Users);
    }
    findUser();
})

router.put('/',(req,res)=>{
    async function updateUser(email){
        const user = await User.find({email:email})
        user[0].name=req.body.data.name,
        user[0].phone = req.body.data.phone,
        user[0].profession = req.body.data.profession
        const result = await user[0].save();
        console.log(result)
        res.send("user updated")
    }
    updateUser(req.body.data.email);
})

router.delete('/',(req,res)=>{
    async function removeUser(email){
      const result = await User.deleteOne({email:email});
      console.log(result);
    }
    removeUser(req.body.email);
    console.log(req.body.email);
    res.send("user deleted");
    
})


module.exports = router;
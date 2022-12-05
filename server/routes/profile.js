const express = require('express');
const router = express.Router();
const User = require('../model/user')
// const bcrypt = require('bcrypt');

router.delete("/:Email",(req,res)=>{
    async function findUser(){
        try{
            // const result = await User.find({email:req.params.Email});
             const result = await User.deleteOne({email:req.params.Email})
        // user.delete();
            console.log(result);
            // console.log(req.body.Email);
            // console.log(req.params.Email);
        res.send("deleted successfully");
    }
    catch(error){
        res.send(error.message);
    }

    }
    findUser();
})

router.post('/',(req,res)=>{
    async function findUser(){
        const user = await User.find({email:req.body.Email},{name:1,_id:0,email:1,phoneNo:1})
        if(user){
            res.send(
                {
                Email:user[0].email,
                Name:user[0].name,
                PhoneNo:user[0].phoneNo}
                // "user found successfully"
            )
            console.log(user[0].name);
        }
        //  if(password){
        //     const result = await bcrypt.compare(req.body.Password.toString(),password[0].password)
        //         if(result==true){
        //             res.send("user logged in successfully");
        //             console.log("user verified");
        //         }
        //         else{
        //             res.send("Username or password not correct");
        //             console.log("user not verified")
        //         }
     
        //  }
    }
    findUser();
})


module.exports = router;
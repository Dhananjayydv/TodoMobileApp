const express = require('express');
const router = express.Router();
const User = require('../model/user')
const bcrypt = require('bcrypt');


router.post('/',(req,res)=>{
    async function findUser(){
        try{const found = await User.find({email:req.body.Email});
           if(found){

           
            const password = await User.find({email:req.body.Email}).select({password:1,_id:0})
         if(password){
            const result = await bcrypt.compare(req.body.Password.toString(),password[0].password)
                if(result==true){
                    res.send("user logged in successfully");
                    console.log("user verified");
                }
                else{
                    res.send("Username or password not correct");
                    console.log("user not verified")
                }
     
         }}
         else{
            res.send("User does not exist");
         }
        }
         catch(error){
            console.log(error.message);
         }
    }
    findUser();
})


module.exports = router;
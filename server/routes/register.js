const express = require('express');
const router = express.Router();
const User = require('../model/user');
const bcrypt = require('bcrypt');

router.post('/',(req,res)=>{
    async function genrateHash(){
        try{const salt =await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.Password, salt);
        const user = new User({
            name:req.body.Name,
            email:req.body.Email,
            password:hashPassword
        })
        const result = await user.save();
        console.log(result);
        res.send("user registered successfully");
        
        }
        catch(error){
            // res.send(error)
            console.log(error.message);
            res.send(error.message);
        }
    }
    genrateHash();

})



module.exports = router;
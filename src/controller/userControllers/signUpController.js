const userModel = require("../../model/userModel")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const signUpController = async(req,res) =>{
    try{
        const {email, password,role} = req.body
        const hashPassword = await bcrypt.hash(password,  parseInt(process.env.SALT_VALUE));
        const user  = new userModel({email, password : hashPassword, role })
        await user.save()
        res.status(200).json({message:"user created"})
    }catch(err) {
        res.status(500).json({message: "internal server error"})
    }
}

module.exports = signUpController;
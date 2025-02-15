const userModel = require("../../model/userModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const teamNameGetter = require("../../services/teamNameGetter")
require("dotenv").config()

const loginInController = async(req, res) => {
    try{
        const {email,password} = req.body
    
        const user = await userModel.findOne({
            email
        })
       
        if(!user){
            res.status(404).json({message: "user not found"})
            return
        }
        const result = await bcrypt.compare(password, user.password);
        
        if(!result){
            res.status(401).json({message:"incorrect password"})
            return
        }

        const teamName = await teamNameGetter(email,user.role)
        
        const token = await jwt.sign(
            { email: email, role: user.role, teamName: teamName },
            process.env.JWT_SECRET, 
            { expiresIn: "1h" }
        );
        
        res.cookie("jwtToken", token, {
            secure: true,
            httpOnly: true,
            sameSite: "none",
            maxAge: 60 * 60 * 1000
        });
        
        
        res.status(200).json({message:"user logined", role : user.role, teamName})
    }
    catch(err){
        res.status(500).json({message: err})
    }




}
module.exports = loginInController;
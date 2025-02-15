const teamModel = require("../../model/teamModel")
const userModel = require("../../model/userModel")
const bcrypt = require("bcrypt");
require("dotenv").config();

const addInternController = async(req, res) => {
    try{
        const {teamName,internEmail, internPassword} = req.body
        const hashPassword = await bcrypt.hash(internPassword, parseInt(process.env.SALT_VALUE));

        const currIntern = {
            email : internEmail,
            password: internPassword
        }
        const existingInfo = await userModel.find({email : internEmail})
        if(existingInfo.length > 0){
            res.status(400).json({message: "already exists"})
        }else{
            const teamInfo = await teamModel.findOne({ teamName });
            teamInfo.interns.push(currIntern);
            await teamInfo.save();

            const newUser = new userModel({
                email : internEmail,
                password: hashPassword,
                role:"intern"
            })
            await newUser.save();
            res.status(200).json({message:"intern added"})
        }

    }catch(err){
        res.status(500).json({message:"Something went wrong"})
    }



}

module.exports = addInternController
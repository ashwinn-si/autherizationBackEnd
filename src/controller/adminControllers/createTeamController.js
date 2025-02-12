const teamModel = require("../../model/teamModel")
const userModel = require("../../model/userModel")
const bcrypt = require("bcrypt");
require("dotenv").config();

const createTeamController = async (req, res) => {
    try{
        const {teamLeaderEmail, teamLeaderPassword, teamName} = req.body
        const hashPassword = await bcrypt.hash(teamLeaderPassword, parseInt(process.env.SALT_VALUE));
        const existingInfo = await userModel.find({email : teamLeaderEmail})
        const existingTeam = await teamModel.find({teamName})
        if(existingInfo.length > 0){
            res.status(400).json({message:"credentials"})
        }else if(existingTeam.length > 0){
            res.status(400).json({message:"team"})
        }else{
            const newUser = new userModel({
                email: teamLeaderEmail,
                password: hashPassword,
                role : "team leader"
            })
            await newUser.save()
            const newTeam = new teamModel({
                teamName,
                leader : {
                    email : teamLeaderEmail,
                    password : teamLeaderPassword,
                }
            })
            await newTeam.save();
            res.status(200).json({message: "Successfully created team"})
        }
    }
    catch (error){
        res.status(500).json({message : "error in last step",error: error})
    }

}

module.exports = createTeamController
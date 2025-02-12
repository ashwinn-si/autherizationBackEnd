const teamModel = require("../../model/teamModel")
const userModel = require("../../model/userModel")

const deleteTeamController = async (req, res) => {
    try{
        const {teamName} = req.body
        const teamInfo = await teamModel.findOne({teamName})
        const internList = teamInfo.interns
        internList.map(async (intern)=> {
            const user = userModel.findOne({email : intern.email});
            if(user) {
                await userModel.findOneAndDelete({email: intern.email})
            }
        })
        await teamModel.findOneAndDelete({teamName})
        res.status(200).json({message:"team deleted successfully"})
    }catch(err){
        res.status(500).json({message:"error occured"})
    }

}

module.exports = deleteTeamController
const teamModel = require("./../../model/teamModel")
const userModel = require("./../../model/userModel")

const deleteInternController = async( req, res) => {
    try{
        const {teamName, internEmail} = req.body;
        const team = await teamModel.findOne({teamName})
        await userModel.findOneAndDelete({email: internEmail})
        const interList = team.interns.filter((intern) => intern.email !== internEmail)
        team.interns = interList;
        await team.save()
        res.status(200).json({message : "intern Deleted successfully."})
    }catch(err){
        res.status(500).json({message : "Error while deleting intern"})
    }


}

module.exports = deleteInternController;
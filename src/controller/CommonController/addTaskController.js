const teamModel = require("../../model/teamModel")

const addTaskController = async(req, res) => {
    try{
        const {teamName,taskID, taskTitle} = req.body

        const currTask = {
            taskTitle,
            taskID,
            status : "active"
        }
        const teamInfo = await teamModel.findOne({ teamName });
        teamInfo.tasks.push(currTask);
        await teamInfo.save();
        res.status(200).json({message:"task added added"})
    }catch(err){
        res.status(500).json({message:"Something went wrong"})
    }
}

module.exports = addTaskController;
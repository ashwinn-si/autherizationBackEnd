const teamModel = require("../../model/teamModel")

const updateTaskStatusController = async(req,res) =>{
    try{
        const {teamName, taskID, status} = req.body
        const teamInfo = await teamModel.findOne({teamName : teamName})
        const taskList = teamInfo.tasks;
        const taskToBeChanged = taskList.filter(task => task.taskID === taskID)
        taskToBeChanged[0].status = status;
        await teamInfo.save();
        res.status(200).json({message : "task status updated"})
    }catch(err){
        res.status(500).json({message : "error occurred"})
    }
}

module.exports = updateTaskStatusController;
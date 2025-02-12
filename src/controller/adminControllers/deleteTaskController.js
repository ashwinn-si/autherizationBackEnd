const teamModel = require("./../../model/teamModel")

const deleteTaskController = async(req, res) =>{
        try{
                const {taskID, teamName} = req.body;
                const teamInfo = await teamModel.findOne({teamName})
                const taskList = teamInfo.tasks;
                const filterList = taskList.filter(task => task.taskID !== taskID);
                teamInfo.tasks = filterList
                await teamInfo.save();
                return res.status(200).json({message : "Successfully deleted task"});
        }
        catch(err){
                return res.status(401).json({message:"Not authorized"});
        }

}
module.exports = deleteTaskController;
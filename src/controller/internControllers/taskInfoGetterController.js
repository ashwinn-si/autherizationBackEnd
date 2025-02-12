const teamModel = require("./../../model/teamModel")

const taskInfoGetterController = async (req, res) => {
    try{
        const {teamName} = req.body;
        const teamInfo = await teamModel.findOne({teamName})

        res.status(200).json({
            tasks : teamInfo.tasks
        })
    }catch (err){
        res.status(500).json({message : "something went wrong"})
    }


}
module.exports = taskInfoGetterController;
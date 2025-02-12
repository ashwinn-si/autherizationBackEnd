const teamModel = require("./../../model/teamModel")

const teamInfoGetterController = async(req,res) =>{
    try{
        const {teamName} = req.body
        const teamInfo = await teamModel.findOne({teamName : teamName})
        res.status(200).json({teamInfo})
    }catch(err){
        res.status(500).json({message:"internal server error"});
    }

}

module.exports = teamInfoGetterController
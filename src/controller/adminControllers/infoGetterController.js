const teamModel = require("../../model/teamModel")

const infoGetterController = async (req, res) => {
    try{
        const AvaliableTeams = await teamModel.find();
        res.status(200).json({teams : AvaliableTeams});
    }catch(err){
        res.status(500).json({message: "internal server error"});
    }
}

module.exports = infoGetterController
const userModel = require("../../model/userModel");

const deleteLoginController = async(req,res) => {
    try {
        const {email} = req.body;
        await userModel.findOneAndDelete({email});
        res.status(200).json({message: "user deleted successfully."});
    } catch (err) {
        res.status(500).send({message: "internal server error"});
    }
}

module.exports = deleteLoginController;
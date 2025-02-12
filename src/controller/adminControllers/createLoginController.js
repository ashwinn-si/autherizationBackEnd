const bcrypt = require("bcrypt");
const userModel = require("../../model/userModel");

const createLoginController = async (req,res) => {
    try{
        const {email,password ,role} = req.body;
        const hashpassword = await bcrypt.hash(password, parseInt(process.env.SALT_VALUE));
        const user = new userModel({email, password: hashpassword, role});
        await user.save();
        return res.status(200).json({message : "user created"})
    }catch(err){
        return res.status(500).json({message : "internal server error"})
    }
}

module.exports = createLoginController;
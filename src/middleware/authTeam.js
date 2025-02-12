
const authTeam = ()=>{
    return (req,res,next) => {
        const {teamName} = req.body
        if(req.user.role !== "admin" && teamName !== req.user.teamName){
            return res.status(401).json({ message: "Not authorized" });
        }
        next();
    }

}

module.exports = authTeam;
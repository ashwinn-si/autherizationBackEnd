const logoutController = async(req,res) => {
    res.clearCookie("jwtToken", {
        secure: true,
        httpOnly: true,
        sameSite: "none"
    });
    res.status(200).json({ message: "Cookie deleted" });
}
module.exports = logoutController

const authUser = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Not authorized" });
        }
        next();
    };
};

module.exports = authUser;

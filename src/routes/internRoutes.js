const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/tokenVerification");
const authUser = require("../middleware/authUser")
const authTeam  = require("../middleware/authTeam")
const taskInfoGetterController = require("../controller/internControllers/taskInfoGetterController");

router.post("/taskinfogetter",verifyToken,authUser("intern"),authTeam(),taskInfoGetterController);

module.exports = router;
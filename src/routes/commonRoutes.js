const express = require('express')
const router = express.Router()
const teamInfoGetterController = require("../controller/CommonController/teamInfoGetterController")
const verifyToken = require("../middleware/tokenVerification")
const authUser = require("../middleware/authUser")
const authTeamLeader = require("../middleware/authTeam")
const addInternController = require("../controller/CommonController/addInternController")
const addTaskController = require("../controller/CommonController/addTaskController")
const deleteInternController = require("../controller/CommonController/deleteInternController");

router.post("/teamInfoGetter",verifyToken,authUser("admin","team leader"),authTeamLeader() ,teamInfoGetterController)
router.post("/addIntern",verifyToken,authUser("admin","team leader"),authTeamLeader(),addInternController)
router.post("/addTask",verifyToken,authUser("admin","team leader"),authTeamLeader(),addTaskController)
router.post("/deleteIntern",verifyToken,authUser("admin","team leader"),authTeamLeader(),deleteInternController)

module.exports = router
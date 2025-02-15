const express = require('express');
const router = express.Router();
const verifyToken = require("../middleware/tokenVerification")
const authUser = require("../middleware/authUser")
const authTeamLeader = require("../middleware/authTeam")
const updateTaskStatusController = require("../controller/teamleaderControllers/updateTaskStatusController")

router.post("/updateTaskStatus",verifyToken,authUser("team leader","intern"),authTeamLeader(),updateTaskStatusController);

module.exports = router;
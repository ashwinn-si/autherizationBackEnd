const express = require('express');
const  router = express.Router();
const createLoginController = require("../controller/adminControllers/createLoginController");
const deleteLoginController = require("../controller/adminControllers/deleteLoginController");
const infoGetterController = require("../controller/adminControllers/infoGetterController");
const createTeamController = require("../controller/adminControllers/createTeamController")
const verifyToken = require("../middleware/tokenVerification")
const authUser = require("../middleware/authUser")
const deleteTeamController = require("../controller/adminControllers/deleteTeamController");
const deleteTaskController= require("../controller/adminControllers/deleteTaskController")


router.get("/teamInfoGetter",verifyToken,authUser("admin"),infoGetterController)
router.post("/createLogin",verifyToken,authUser("admin"),createLoginController)
router.delete("/deleteLogin",verifyToken,authUser("admin"),deleteLoginController)
router.post("/createTeam",verifyToken,authUser("admin"),createTeamController)
router.post("/deleteTeam",verifyToken,authUser("admin"),deleteTeamController);
router.post("/deleteTask",verifyToken,authUser("admin"),deleteTaskController)

module.exports = router;
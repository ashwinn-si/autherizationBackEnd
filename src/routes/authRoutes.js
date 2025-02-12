const express = require('express')
const router = express.Router()
const signUpController = require("../controller/userControllers/signUpController")
const loginInController = require("../controller/userControllers/loginInController")
const logoutController = require("../controller/userControllers/logoutController")

router.post("/signup",signUpController)
router.post("/login",loginInController)
router.post("/logout",logoutController)

module.exports = router
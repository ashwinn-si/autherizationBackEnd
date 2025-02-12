const express = require('express')
const router = express.Router()
const signUpController = require("../controller/userControllers/signUpController")
const loginInController = require("../controller/userControllers/loginInController")

router.post("/signup",signUpController)
router.post("/login",loginInController)

module.exports = router
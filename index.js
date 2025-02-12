const express = require('express')
const dbConnect = require('./src/config/dbConnect')
const app = require("./src/app")

dbConnect();
app.listen(5000,()=>{
    console.log("Server running on port 5000.")
})

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email : String,
    password: String,
    role : {
        type : String,
        enum : ["admin","team leader", "intern"]
    }
})

const userModel = mongoose.model('userDetails',userSchema);

module.exports = userModel;
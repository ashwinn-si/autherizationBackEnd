const mongoose = require('mongoose');

const leaderSchema = new mongoose.Schema({
    email : String,
    password : String,
})

const internSchema = new mongoose.Schema({
    email: String,
    password: String,
})

const taskSchema = new mongoose.Schema({
    taskID : String,
    taskTitle : String,
    status : String
})

const AllTeamSchema = new mongoose.Schema({
    teamName : String,
    leader : leaderSchema,
    interns : {
        type: [internSchema,],
        default : []
    },
    tasks : {
        type : [taskSchema,],
        defaults : []
    }
})

const teamModel = mongoose.model('teamDetails',AllTeamSchema);

module.exports = teamModel;
const teamModel = require("../model/teamModel");

async function teamNameFromIntern(email) {
    const allTeams = await teamModel.find({});
    for (let team of allTeams) {
        let internList = team.interns;
        for (let intern of internList) {
            if (intern.email === email) {
                return team.teamName;
            }
        }
    }
    return "";
}

async function teamNameFromTeamLeader(email) {
    const allTeams = await teamModel.find({});
    for (let team of allTeams) {
        if (team.leader.email === email) {
            return team.teamName; // return immediately when found
        }
    }
    return "";
}

async function teamNameGetter(email, role) {
    if (role === "admin") return "admin";
    if (role === "team leader") {
        return await teamNameFromTeamLeader(email);
    } else {
        return await teamNameFromIntern(email);
    }
}

module.exports = teamNameGetter
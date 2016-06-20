var mongoose = require('mongoose');

var teamSchema = mongoose.Schema({
    _id:{
        type:String,
        required :true
    },
    foundation_year:{
        type:String,
        required :true
    },
    country:{
        type:String,
        required:true
    },
    history:{
        type:String,
        required :true
    },
    current:{
        type:String,
        required :true
    },
    photo:{
        type:String,
        required:true
    }

});

var Team = module.exports = mongoose.model("Team", teamSchema);

module.exports.getTeams = function(callback ,limit){
    Team.find(callback).limit(limit);
};
module.exports.getTeamById = function(id,callback){
    Team.findById(id,callback);
};
module.exports.addTeam= function (team,callback){
    Team.create(team,callback);
};
module.exports.updateTeam = function(id ,team , option,callback){
    var query = {_id:id};
    var update={
        _id:team._id,
        foundation_year : team.foundation_year,        
        country : team.country,
        history : team.history,
        current : team.current,
        photo : team.photo
    };
    Team.findOneAndUpdate(query,update,option , callback);

};
module.exports.deleteTeam = function(id,callback){
    var query = {_id:id};
    Team.remove(query,callback);
};
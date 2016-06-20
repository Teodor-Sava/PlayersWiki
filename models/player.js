var mongoose = require('mongoose');

var playerSchema = mongoose.Schema({
    _id:{
        type:String,
        required :true
    },
    age:{
        type:Number,
        required : true
    },
    nationality:{
        type:String,
        required :true
    },
    early_life:{
        type:String,
        required:true
    },
    career:{
        type:String,
        required:true
    },
    personal_life:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required : true
    },
    team_id:{
        type : String,
        required : true
    },
    create_date:{
        type:Date,
        default : Date.now
    }
});

var Player = module.exports = mongoose.model('Player',playerSchema);

module.exports.getPlayers = function(callback, limit){
    Player.find(callback).limit(limit);
};

module.exports.getPlayerById = function(id,callback){
    Player.findById(id,callback);
};

module.exports.addPlayer = function(player,callback){
    Player.create(player,callback);
};

module.exports.updatePlayer = function(id,player , option, callback){
    var query = {_id:id};
    var update = {
        age : player.age,
        nationality : player.nationality,
        early_life : player.early_life,
        career : player.career,
        personal_life : player.personal_life,
        photo : player.photo,
        team_id : player.team_id
    };
    Player.findOneAndUpdate(query,update,option,callback);
};

module.exports.deletePlayer = function (id,callback) {
    var query ={_id:id};
    Player.remove(query,callback);
};

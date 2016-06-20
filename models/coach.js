var mongoose = require('mongoose');

var coachSchema = mongoose.Schema({
    _id : {
        type : String,
        required :true
    },
    age : {
        type : Number,
        required :true
    },
    nationality : {
        type : String ,
        required : true
    },
    current_team : {
        type : String,
        required : true
    },
    description: {
        type : String,
        required :true
    },
    personal_life: {
        type : String,
        required :true
    },
    favorite_player:{
        type : String,
        required :true
    },
    photo : {
        type : String,
        required :true
    }
});

var Coach = module.exports = mongoose.model('Coach' , coachSchema);

module.exports.getCoaches =  function (callback, limit){
    Coach.find(callback).limit(limit);
};

module.exports.getCoachById = function (id,callback){
    Coach.findById(id,callback);
};
module.exports.addCoach =function (coach , callback){
    Coach.create(coach,callback);
};
module.exports.updateCoach = function (id , coach ,option, callback) {
    var query = {_id:id};
    var update = {
        age : coach.age,
        nationality : coach.nationality,
        current_team : coach.current_team,
        description : coach.description,
        personal_life : coach.personal_life,
        favorite_player : coach.favorite_player,
        photo : coach.photo
    }
    Coach.findOneAndUpdate(query, update ,option ,callback);
};

module.exports.deleteCoach = function(id,callback){
    var query = {_id:id};
    Coach.delete(id,callback);
};
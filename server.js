var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 4600;
var logger = require('morgan');

app.use(logger('dev'));
app.use(express.static(__dirname+'\\app'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

Players = require ('./models/player');
Teams = require('./models/team');
Coaches = require('./models/coach');
mongoose.connect('mongodb://localhost/playerswiki');
var db = mongoose.connection;

app.get('/api/teams', function(req,res){
    Teams.getTeams(function (err,team){
        if(err){
            throw err;
        }
        res.json(team)
    })
});

app.get('/api/teams/:_id',function(req,res){
    Teams.getTeamById(req.params._id,function(err,team){
        if(err){
            throw err;
        }
        res.json(team);
    })
})

app.post('/api/teams',function(req,res){
    var team = req.body;
    Teams.addTeam(team,function (err,team) {
        if(err){
            throw err;
        }
        res.json(team);
    })
});

app.put('/api/teams/:_id',function(req,res){
    var id = req.params._id;
    var team = req.body;
    Teams.updateTeam(id, team ,{},function(err,team){
        if(err){
            throw err ;
        }
        res.json(team);
    })

});

app.delete('/api/teams/:_id',function(req,res){
    var id = req.params._id;
    Teams.deleteTeam(id,function(err,team){
        if(err){
            throw err;
        }
        res.json(team);
    })
});

//===================================================================

app.get('/api/players', function(req,res){
    Players.getPlayers(function (err,player){
        if(err){
            throw err;
        }
        res.json(player)
    })
});
app.get('/api/players/:_id',function (req,res) {
    var id = req.params._id;
    Players.getPlayerById(id,function (err,player) {
        if(err){
            throw err;
        }
        res.json(player);
    });
});
app.post('/api/players',function(req,res){
    var player = req.body;
    Players.addPlayer(player,function (err,player) {
        if(err){
            throw err;
        }
        res.json(player);
    })
});

app.put('/api/players/:_id',function(req,res){
    var player = req.body;
    var id =req.params._id;
    Players.updatePlayer(id, player ,{},function(err,player){
        if(err){
            throw err ;
        }
        res.json(player);
    })

});

app.delete('/api/players/:_id',function(req,res){
    var id = req.params._id;
    Players.deletePlayer(id,function(err,player){
        if(err){
            throw err;
        }
        res.json(player);
    })
});

app.get('/api/coaches',function(req,res){
    Coaches.getCoaches(function(err,coach){
        if(err){
            throw err;
        }
        res.json(coach);
    })
});
app.get('/api/coaches/:_id',function(req,res){
    var id = req.params._id;
    Coaches.getCoachById(id,function(err,coach){
        if(err){
            throw err;
        }
        res.json(coach);
    })
});
app.post('/api/coaches',function(req,res){
    var coach = req.body;
    Coaches.addCoach(coach, function(err,coach){
        if(err){
            throw err;
        }
        res.json(coach);
    })
});
app.put('/api/coaches/:_id',function(req,res){
    var id = req.params._id;
    var coach = req.body;
    Coaches.updateCoach(id,coach,{},function(err,coach){
        if(err){
            throw err;
        }
        res.json(coach);
    })
});
app.delete('/api/coaches/:_id',function (req,res) {
    var id = req.params._id;
    Coaches.deleteCoach(id,function (err,coach) {
        if(err){
            throw err;
        }
        res.json(coach)
    })
});


app.listen(port);
console.log('Server is running on port '+port+'...');
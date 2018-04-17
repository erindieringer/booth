var express = require("express");
var app = express();
var morgan = require('morgan');

// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

app.get('/',function(req,res){
       
     res.sendFile(__dirname + '/public/home.html');
});

app.get('/ballroom',function(req,res){
       
     res.sendFile(__dirname +'/public/ballroom.html');

});

app.get('/deck',function(req,res){
       
     res.sendFile(__dirname + '/public/deck.html');

});

app.get('/artifact',function(req,res){
       
     res.sendFile(__dirname + '/public/artifact.html');

});

app.get('/panic',function(req,res){
       
     res.sendFile(__dirname + '/public/panic.html');

});

app.get('/ticketing',function(req,res){
       
     res.sendFile(__dirname + '/public/ticketing.html');

});

app.get('/underwater',function(req,res){
       
     res.sendFile(__dirname + '/public/underwater.html');

});

app.get('/end',function(req,res){
       
     res.sendFile(__dirname + '/public/end.html');

});
 
app.get('/end2',function(req,res){
       
     res.sendFile(__dirname + '/public/end2.html');

});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
var express = require("express");
var app = express();
var morgan = require('morgan');

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

app.get('/uderwater',function(req,res){
       
     res.sendFile(__dirname + '/public/underwater.html');

});

  
 app.listen(5000);

console.log("Server listening at http://localhost:5000/");
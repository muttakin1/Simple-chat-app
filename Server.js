var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db_url = "mongodb+srv://Muttakin:12345six@cluster0-2wehj.mongodb.net/test?retryWrites=true&w=majority";

app.get('/', function(request, response){
  response.render('landingpage.ejs');
});
app.use(express.static(path.join(__dirname, 'static')));

server.listen(3000, function(){
  console.log('listening on *:3000');
});
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var db_url = "mongodb+srv://Muttakin:12345six@cluster0-2wehj.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(db_url, { useNewUrlParser: true });
mongoose.connection.on('error', function (err) {
  console.log(err);
  console.log('Could not connect to mongodb');
})
users = [];
connections = [];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'static')));



io.sockets.on('connection', function(socket){
  
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);


  socket.on('disconnect', function(data){
    users.splice(users.indexOf(socket.username), 1);
    updateUsernames();
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected %s sockets connected', connections.length);
  });

 
  socket.on('send message', function(data){
    console.log(data);
    io.sockets.emit('new message', {msg: data, user: socket.username});
  });

 
  socket.on('new user', function(data, callback){
    callback(true);
    socket.username = data;
    users.push(socket.username);
    updateUsernames();
  });

  function updateUsernames(){
    io.sockets.emit('get users', users);
  }
});
require('./routes/routes.js')(app);

server.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function () {
  console.log('Server running');
});
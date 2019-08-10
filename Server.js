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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'static')));


require('./routes/routes.js')(app);

server.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function () {
  console.log('Server running');
});
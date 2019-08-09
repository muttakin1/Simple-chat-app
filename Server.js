var express = require('express');
var path = require ('path');
var app = require('express')();
var http = require('http').createServer(app);
const CURRENT_WORKING_DIR = process.cwd()

app.get('/', function(request, response){
  response.render('landingpage.ejs');
});
app.use(express.static(path.join(__dirname, 'static')));

http.listen(3000, function(){
  console.log('listening on *:3000');
});
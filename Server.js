var app = require('express')();
var http = require('http').createServer(app);


app.get('/', function(request, response){
  response.render('index.ejs');
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
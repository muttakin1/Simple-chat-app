module.exports = function(app){
  
  var user = require('./../controllers/controller.js');
  var session= require('./../controllers/controller.js');
  
  app.get('/', user.new);
  
  app.post('/user/create', user.create);
  app.post('session/create', session.create);
  
  
}
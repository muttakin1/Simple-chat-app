module.exports = function(app){
    var user = require('./../controllers/controller.js');
    
    app.get('/', user.new);
    
    app.post('/user/create', user.create);
    
   
    
}
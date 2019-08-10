var User = require('./../models/Users.js');
var Session = require('./../models/Sessions.js');
module.exports.new = function(request, response){
    response.render('landingpage.ejs');
}

module.exports.create =  function(request, response){
  var new_user = new User(request.body);
  new_user.save(function(err,data){
    if(err){
      console.log(err)
      return response.status(400).json({error: "Please add a name"});
      console.log(data);
    }
    console.log(data);
    return response.status(200).json({message: "User successfully created"});
  })
  console.log(request.body);
  
  var new_session = new Session(request.body);
    new_session.save(function(err,data){
      if(err){
        console.log(err)
        return response.status(400).json({error: "Please add a session name"});
        console.log(data);
      }
      console.log(data);
      return response.status(200).json({message: "Session successfully created"});
    })
    console.log(request.body);
}

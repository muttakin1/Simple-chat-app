$(document).ready(function(){

    $('#messageArea').hide();
});

$('#loginForm').submit(function(event){
    event.preventDefault();
   
      
        $('#loginForm').hide();
        document.getElementById('jumbotron').style.width = '80%';
      
        $('#messageArea').show();
      
   
  });

  document.getElementById('timer').innerHTML = 15+":"+00;
  
  var myTime;

  $('#startbtn').click(function startTimer(){
    $('#startbtn').hide();
    $('#stopbtn').show();
    $('#message').show();
    $('#messagebtn').show();
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}

    document.getElementById('timer').innerHTML = m + ":" + s;
    myTime= setTimeout(startTimer, 1000);
    if(m==00 && s==00){
      clearTimeout(myTime);
      document.getElementById('timer').innerHTML = 00 + ":" + 00;
      $('#stopbtn').hide();
      $('#messagebtn').hide();
      $('#message').hide();
     
    }
  });

  $('#stopbtn').click(function stopTimer(){
    clearTimeout(myTime);
    document.getElementById('timer').innerHTML = 00 + ":" + 00;
    $('#stopbtn').hide();
    $('#messagebtn').hide();
    $('#message').hide();
    
  });
  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
  }

var user = {name:""};
var session = {name:""};   

    $('#loginbtn').click(function(event){
        user.name = $('#username').val();
        $.ajax({
            method: "POST",
            url: "/user/create",
            data: user
        }).done(function(response){
            console.log(response);
            
        }).fail(function(response){
            console.log(response.responseText);
        });
        
       
       
    });
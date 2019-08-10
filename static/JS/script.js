$(document).ready(function(){

    $('#messageArea').hide();
});


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
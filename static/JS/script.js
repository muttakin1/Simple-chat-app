$('#loginbtn').click(function(event){
    user.name = $('#username').val();
    $.ajax({
        method: "POST",
        url: "/user/create",
        data: user
    }).done(function(response){
        console.log(response);
        document.location = '/index';
    }).fail(function(response){
        console.log(response.responseText);
    });
});
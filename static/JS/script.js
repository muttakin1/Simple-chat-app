 var user={name:""}
 $('#loginbtn').click(function (event) {
   user.name = $('#name').val();
   $.ajax({
     method: "POST",
     url: "/user/create",
     data: user
   }).done(function (response) {
     console.log(response);

   }).fail(function (response) {
     console.log(response.responseText);
   });
 });
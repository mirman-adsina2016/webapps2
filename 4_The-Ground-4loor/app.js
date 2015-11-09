
$("#contact-form").submit(function(event){
  console.log(event);
  event.preventDefault();
  $.ajax ({
    url: 'http://x.mirman.org:1031/ground4loor',
    type: 'POST',
    contentType: 'json',
    data: {
        "firstName": $("#firstname").val(),
        "lastName": $("#lastname").val(),
        "email": $("#email").val(),
        "message": $("#message").val()
      }
    },
    function(res) {
      console.log(response)
    });
});

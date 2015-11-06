
//Use jQuery to collect the values from the fields and create a
//JSON object containing them. Then, log the result to the console

// Secondary Objective: Use the AJAX methods built into jQuery to send
// The form data to http://x.mirman.org:9999. Write a callback to handle
// the response.

function sendData() {
  $.ajax({
    url: 'x.mirman.org:1031/contact',
    type: 'POST',
    contentType: 'json',
    data: {
      $(document).on("submit", function(event) {
        event.preventDefault();
        console.log( $("#firstname").serialize())
        console.log( $("#lastname").serialize())
        console.log( $("#email").serialize())
        console.log( $("#message").serialize())
      });
    },
    dataType: 'json'
  });
  alert("json posted!");
};




/*
var userInfo = {
first: $("#firstname").serialize(),
last: $("#lastname").serialize(),
email: $("#email").serialize(),
message: $("#message").serialize()
*/

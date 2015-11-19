var ref = new Firebase("https://5ire-ADSINA.firebaseio.com"); //Use your app's Firebase URL

ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// Add some event handlers for FB events

$(document).ready(function(){
  console.log("Document loaded");
  $("#add-form").submit(function(event){
    event.preventDefault();
    console.log("Form submitted!");

    var fields = {
      "firstName": $("#firstname").val(),
      "lastName": $("#lastname").val(),
      "email": $("#email").val(),
      "message": $("#feedback").val()
    }

    ref.push(fields)

  });
});

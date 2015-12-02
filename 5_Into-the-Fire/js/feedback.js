var ref = new Firebase("https://5ire-adsina.firebaseio.com"); //Use your app's Firebase URL

ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  update(snapshot);
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
      "message": $("#feedback").val(),
      "timestamp": new Date().getTime()
    }

    ref.push(fields)


  });
});

function update(snapshot) {
  var data = snapshot.val();
  for (var c in data){
    var comment = data[c];
    var newLi = $(document.createElement("li"));
    newLi.append("<h2>" + comment.firstName + " " + comment.lastName + "</h2>" + "<h3>" + comment.message + "</h3>" + "<h4>" + comment.email + "</h4>" + "<h5>" + comment.timestamp);
    $("#comments").append(newLi)
  }
}

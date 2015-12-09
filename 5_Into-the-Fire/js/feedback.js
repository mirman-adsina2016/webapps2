var ref = new Firebase("https://5ire-adsina.firebaseio.com"); //Use your app's Firebase URL

function addEventListeners() {
  $("#add-form").submit(function(event){
    event.preventDefault();
  });
  $(".likes").click(function(){
    var key = $(this).parent().data("id");
    var currentLikes = $(this).parent().data(totalLikes);
    var newLikes = currentLikes + 1;
    ref.child(key).update({
      totalLikes: newLikes
    });
  });
}





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
    addEventListeners();

    var fields = {
      "firstName": $("#firstname").val(),
      "lastName": $("#lastname").val(),
      "email": $("#email").val(),
      "message": $("#feedback").val(),
      "timestamp": new Date().getTime(),
      "likes": 0

    }

    ref.push(fields)

  });
});



function update(snapshot) {
  var data = snapshot.val();
  for (var c in data){
    var comment = data[c];
    var commentDate = new Date(comment.timestamp);
    var newLi = $(document.createElement("li"));
    newLi.data("id", c)
    newLi.data("totalLikes", comment.totalLikes)
    newLi.append("<h2>" + comment.firstName + " " + comment.lastName + "</h2>" + "<h3>" + comment.message + "</h3>" + "<h4>" + comment.email + "</h4>" + "<h5>" + commentDate.toLocaleTimeString() + ", " + commentDate.toLocaleDateString() + "</h5>" + "<h6>" + comment.likes + "</h6>" + "<button type='button' class='small likes'>Like</button>" );
    $("#comments").append(newLi)
    addEventListeners();
  }
}

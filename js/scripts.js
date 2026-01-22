$(document).ready(function() {
  $("#pingpong-form").on("submit", function(event) {
    event.preventDefault();

    var value = parseInt($("#value").val(), 10);
    var $results = $("#results");
    $results.empty();

    if (isNaN(value) || value < 1) {
      $results.append("<li>Please enter a number greater than 0.</li>");
      return;
    }

    for (var i = 1; i <= value; i++) {
      var output;
      if (i % 15 === 0) {
        output = "pingpong";
      } else if (i % 3 === 0) {
        output = "ping";
      } else if (i % 5 === 0) {
        output = "pong";
      } else {
        output = i;
      }
      $results.append("<li>" + output + "</li>");
    }
  });
});

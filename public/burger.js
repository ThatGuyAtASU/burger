// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-burger").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
  
      var newDevouredState = {
        devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/devour/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed sleep to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("added burger!!!!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  });
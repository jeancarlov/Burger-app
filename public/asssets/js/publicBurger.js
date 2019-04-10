// AJAX DOM MANIPULATION 

$(function () {
  // this is targeting the id and class from the views folder
  $(".change-devoured").on("click", function (event) {
    event.preventDefault();
    // the alert is to test the data for debugging
    alert("test")
    let id = $(this).data("id");
    console.log(id);
    let newDevour = $(this).data("devoured");

    // to switch sides 
    if (newDevour == true) {
      newDevour == false;
    } else {
      newDevour == true;
    };

    let newDevourState = {
      devoured = newDevour
    };
    console.log(newDevourState);
  })


  // send the users input request
  $.ajax("/api/burger/" + id, {
    type: "PUT",
    data: newDevourState
  }).then(
    function () {
      console.log("changed devoured state to", newDevour);
      // Reload the page to get the updated list
      location.reload();
    }
  );

  $(".submit-burger").on("click", function (event) {
    event.preventDefault();
    // create the new burger with the user input values from the form
    let newBurger = {
      burger_name: ("#burger").val().trim(),
      devoured: $("input[name=devoured]:checked").val().trim()
    }
    console.log("burger object :", newBurger);

    // send the post request for to the server with ajax
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  })
});

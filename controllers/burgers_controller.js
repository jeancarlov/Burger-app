var express = require("express");

var router = express.Router();

// import the model (burgers.js) to use the database functions. since module communicates with the controller

var burger = require("../models/burger.js");

// create the routes that talks to the model
// this rpute calls all the burgers from the orm
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {  // handlebars object
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
// router for the create that will bring the data form the model
router.post("/api/burger", function (req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
      req.body.burger_name, req.body.devoured
    ], function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
      res.redirect("/");
    });
});

router.put("/api/burger/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.update({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;






var express = require("express");

var router = express.Router();

// import the model (burgers.js) to use the database functions. since module communicates with the controller

var burger = require("../models/burger.js");

// create the routes that talks to the model
// this rpute calls all the burgers from the orm
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {  // handlebars object
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  // router for the create that will bring the data form the model
  router.post("/api/burger", function(req,res) {
      burger.create([
          "burger_name", "devoured"
      ], [
        req.body.name, req.body.devoured
      ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
        res.redirect("/");
      });
  });

  // Export routes for server.js to use.
module.exports = router;






var express = require("express");

var router = express.Router();

// import the model (burgers.js) to use the database functions. since module communicates with the controller

var burger = require("../models/burger.js");

// create the routes that talks to the model

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {  // handlebars object
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  // Export routes for server.js to use.
module.exports = router;
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger ={
    selectAll: function (cb){
        orm.selectAll("burger", function(res){
            cb(res);
        });
    }
}

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
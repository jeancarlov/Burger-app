// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger ={
    selectAll: function (cb){
        orm.selectAll("burger", function(res){
            cb(res);
        });
    },

    //create
    insert: function (col, vals, cb) {
        orm.create("burger", col, vals, function (res) {
            cb(res);
        });  
    },
    update: function (objcol,condition,cb) {
        orm.update("burger", objcol, condition, function(res) {
            cb(res);
          });
        
    }
}

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
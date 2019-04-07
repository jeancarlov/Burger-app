// The ORM  talks to the database and sent it to the module so that the module can send it to the controtlle.



// Import MySQL connection. from the connection.js fill inside the config folder
var connection = require("../config/connection.js");

// Create the methods that will execute the necessary MySQL commands in the controllers. These are the methods I will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
        
    },

    // insertOne: function (tableInput,cols,vals, cb) {
    //     var queryString = "INSERT INTO " + table;

        
    // },

    // updateOne: function name(params) {
        
    // }


}

// Export the orm object for the models (burger.js).
module.exports = orm;
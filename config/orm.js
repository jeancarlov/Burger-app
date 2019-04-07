// Import MySQL connection. from the connection.js fill inside the config folder
var connection = require("../config/connection.js");

// Create the methods that will execute the necessary MySQL commands in the controllers. These are the methods I will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()

var orm = {
    selectAll: function name(params) {
        
    },

    insertOne: function name(params) {
        
    },

    updateOne: function name(params) {
        
    }


}

// Export the orm object for the models (burger.js).
module.exports = orm;
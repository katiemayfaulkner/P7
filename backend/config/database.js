// Database connection
const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "My1$ecure2P@$$sw0rd3",
  database: "WD-Project7"
});

// Open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database!");
});

module.exports = connection;

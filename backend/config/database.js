// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('localhost', 'root', 'My1$ecure2P@$$sw0rd3', {
//   host: 'localhost',
//   dialect: 'mysql',

//   pool: {
//       max: 5, //Never have more than five open connections
//       min: 0, //At a minimum, have zero open connections
//       acquire: 30000,
//       idle: 10000 //Remove a connection from the pool after the connection has not been used for 10 seconds
//   }
// });


var mysql = require('mysql');
  
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "My1$ecure2P@$$sw0rd3"
});
  
// // Create the Database named "gfg"
// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
  
//     con.query("CREATE DATABASE gfg",
//         function (err, result) {
//             if (err) throw err;
//             console.log("Database created");
//         });
// });

// Create the Connection
con.connect(function(err) {
  if (err) throw err;
  console.log("Database connected!");
});
// // const Sequelize = require('sequelize');

// // const sequelize = new Sequelize('localhost', 'root', 'My1$ecure2P@$$sw0rd3', {
// //   host: 'localhost',
// //   dialect: 'mysql',

// //   pool: {
// //       max: 5, //Never have more than five open connections
// //       min: 0, //At a minimum, have zero open connections
// //       acquire: 30000,
// //       idle: 10000 //Remove a connection from the pool after the connection has not been used for 10 seconds
// //   }
// // });


// var mysql = require('mysql');
  
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "My1$ecure2P@$$sw0rd3"
// });
  
// // // Create the Database named "gfg"
// // con.connect(function (err) {
// //     if (err) throw err;
// //     console.log("Connected!");
  
// //     con.query("CREATE DATABASE gfg",
// //         function (err, result) {
// //             if (err) throw err;
// //             console.log("Database created");
// //         });
// // });

// // Create the Connection
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Database connected!");
// });

// var dbConnect = <?php
//     // Enter your host name, database username, password, and database name.
//     // If you have not set database password on localhost then set empty.
//     $con = mysqli_connect("localhost","root","My1$ecure2P@$$sw0rd3","DB-P7");
//     // Check connection
//     if (mysqli_connect_errno()){
//         echo "Failed to connect to MySQL: " . mysqli_connect_error();
//     }
// ?>
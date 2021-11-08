const express = require("express");         // back end web application framework for Node.js
const bodyParser = require("body-parser");  // Node. js body parsing middleware
const cors = require("cors");               // allows restricted resources to be requested from diff domain from which the first resource was served
const app = express();
const path = require('path');               // provides utilities for working with file and directory paths

// Defining Routes
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

//Using Routes
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

app.use(cors());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, 'images')));

// Node server : set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
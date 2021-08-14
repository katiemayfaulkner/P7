const express = require("express");         // back end web application framework for Node.js
const bodyParser = require("body-parser");  // Node. js body parsing middleware
const cors = require("cors");               // allows restricted resources to be requested from diff domain from which the first resource was served
const path = require('path');               // provides utilities for working with file and directory paths

const app = express();

//Node server
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('This is my server response!');
});

server.listen(process.env.PORT || 3000);


//Defining Routes
const userRoutes = require("./routes/user.routes")
const postRoutes = require("./routes/posts.routes")

                //Import database config


                // TEST connection
                db.authenticate()
                .then(()=> console.log('Database connected!'))
                .catch(err => console.log('Error: ' + err))

                app.use(cors());

                app.use(bodyParser.json()); // for parsing application/json
                // app.use(bodyParser.urlencoded({ extended: true }));

                app.use('/images', express.static(path.join(__dirname, 'images')));


//Using Routes
app.use('/user', userRoutes);
app.use('/post', postRoutes);


// Set port + listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
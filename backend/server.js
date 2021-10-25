const express = require("express");         // back end web application framework for Node.js
const bodyParser = require("body-parser");  // Node. js body parsing middleware
const cors = require("cors");               // allows restricted resources to be requested from diff domain from which the first resource was served
const path = require('path');               // provides utilities for working with file and directory paths

const app = express();

// Defining Routes
const userRoutes = require("./routes/user")
// const postRoutes = require("./routes/post")


//NODE SERVER
const http = require('http');

const normalizePort = val => {              //return a valid port, whether it is provided as a number or a string
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort(process.env.PORT || 3000 );
app.set('port', port);

const errorHandler = error => {             //check for various errors and handle them appropriately — it is then registered to the server
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on('error', errorHandler);           //logs the port or named pipe on which the server is running to the console
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);

//Import DATABASE config for connection, which takes place in db file
const db = require('./config/database')

app.use(cors());

app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, 'images')));


//Using Routes
app.use('/user', userRoutes);
// app.use('/post', postRoutes);

module.exports = app;
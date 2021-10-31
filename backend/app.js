const express = require('express');   // Fast & minimalist web framework
const bodyParser = require('body-parser');    // Body parsing middleware : Converts body into useable json object
const path = require('path');   // Path module : provides utilities for working with file and directory paths
const cors = require('cors');   // Cross origin resource sharing : allows resources on a web page to be requested from a domain outside the domain from which the first resource was served

const app = express();    // Club Groupomania forum

// Access routes
const sauceRoutes = require('./routes/post');
const userRoutes = require('./routes/user');


//Add headers to response object
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/posts', postRoutes);
app.use('/api/auth', userRoutes);

// Exporting the web application
module.exports = app;
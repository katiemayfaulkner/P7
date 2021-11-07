const Sequelize = require('sequelize')
module.exports = new Sequelize('DB-P7', 'root', 'My1$ecure2P@$$sw0rd3', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: 0,

  pool: {
      max: 5,   // max number of connections allowed in a pool
      min: 0,   // min number of connections allowed in a pool
      acquire: 30000,   // max time, in milliseconds, that a connection can be held idly before being released
      idle: 10000   // max time, in milliseconds, that the pool seeks to make the connection before an error message appears
  },

  // disable logging; default: console.log
    logging: false
});



// const Sequelize = require('sequelize');

// //Establishing MySQL database connection using Sequelize
// const sequelize = new Sequelize('DB-P7', 'root', 'My1$ecure2P@$$sw0rd3', {
//   host: 'localhost',
//   dialect: 'mysql',
//   pool: {
//     max: 10,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },

//   // disable logging; default: console.log
// //   logging: false
// });


// // Importing the models
// const userModel = require('../models/user');
// const postModel = require('../models/post');

// const User = userModel(sequelize, Sequelize);
// // const Post = postModel(sequelize, Sequelize)

// // Generating the database tables
// sequelize.sync({ force: true })     // force:true = when we start our app all tables will be drop from db and regenerate new

//   .then(() => {
//     console.log('Database table is created!')
// });

// module.exports = {
//   User
// }
const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql-groupomania', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
      max: 5, //Never have more than five open connections
      min: 0, //At a minimum, have zero open connections
      acquire: 30000,
      idle: 10000 //Remove a connection from the pool after the connection has not been used for 10 seconds
  }
});
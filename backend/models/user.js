const Sequelize = require('sequelize')
const sequelize = require('../config/database')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    user_id: {
        primaryKey: true,
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        unique: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    tableName: "user"
  });
};
const Sequelize = require('sequelize')
const sequelize = require('../config/database')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('post', {
    post_id: {
      primaryKey: true,
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      unique: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      unique: true
    },
    creator: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }, 
    imageUrl: {
        type: Sequelize.BLOB,
        allowNull: false
    },
    caption: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comments: {
      type: DataTypes.STRING,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    dislikes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    usersLiked: {
        type: DataTypes.STRING,
    },
    usersDisliked: {
        type: DataTypes.STRING,
    },
    views: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    usersViewed: {
        type: DataTypes.STRING,
    }
  },
  {
    tableName: "post"
  });
};
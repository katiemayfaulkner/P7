const fs = require('fs');   // Import file system, includes functions for deleting (unused) files
const db = require('../config/database');   // Import database
const Post = require('../models/post');   // Import post model
const User = require('../models/user');   // Import user model

// POST : Create a post
exports.createPost = (req, res, next) => {

  req.body.post = JSON.parse(req.body.post);
  const url = req.protocol + '://' + req.get('host');
  const post = new Post({
      url: req.body.post.url,
      creator: req.body.post.creator,
      userId: req.body.post.userId,
      imageUrl: url + '/images/' + req.file.filename,
      caption: req.body.post.caption,
      comments: '',
      likes: 0,
      dislikes: 0,
      usersLiked: req.body.post.usersLiked,
      usersDisliked: req.body.post.usersDisliked,
      views: 0,
      usersViewed: req.body.post.usersViewed 
  });

  // Save to database
  post.save().then(
    () => {
      res.status(201).json({
        message: 'Successfully saved post!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error,
        message: 'Unexpected error, please try again later.'
      });
    }
  );
};

// GET : Retrieve all posts
exports.getAllPosts = (req, res, next) => {
  Post.find().then( //'find' returns array of posts
    (posts) => {
        res.status(200).json(posts);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error,
        message: 'Unexpected error, please try again later.'
      });
    }
  );
};

// GET : Retrieve one post
exports.getOnePost = (req, res, next) => {
  Post.findOne({
      _id: req.params.id,
  }).then(
    (post) => {
      res.status(200).json(post);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error,
        message: 'Unexpected error, please try again later.'
      });
    }
  );
};

// POST : Like or dislike a post (and remove like/dislike)
exports.likePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id }).then
  (post => {
	 // Like
    if (req.body.like === 1) {
      post.usersLiked.push(req.body.userId);
      post.likes += 1;	  
    } 
	  // Remove like, if the user exists in usersLiked
	  else if (req.body.like === 0 && post.usersLiked.includes(req.body.userId)) {
      post.usersLiked.remove(req.body.userId);
      post.likes -= 1;
    } 
	  // Dislike
	  else if (req.body.like === -1) {
      post.usersDisliked.push(req.body.userId);
      post.dislikes += 1;
    } 
	  // Remove dislike, if the user exists in usersDisliked
	  else if (req.body.like === 0 && post.usersDisliked.includes(req.body.userId)) {
      post.usersDisliked.remove(req.body.userId);
      post.dislikes -= 1;
    }
    
    post.save().then(() => {
      res.status(200).json({
        message: 'Successfully liked post' 
      });
    }).catch(
	  (error) => {
      res.status(400).json({
        error: error,
        message: 'Unexpected error, please try again later.'
      });
    });
  });
};

// POST : Write comment
exports.postComment = (req, res, next) => {
  Post.findOne({ _id: req.params.id }).then
  (post => {
	  // Comment
    if (req.body.comments === null) {
      post.comments.push(req.body.comment);  
    } 
    post.save().then(() => {
      res.status(200).json({
        message: 'Successfully commented on post!' 
      });
    }).catch(
	  (error) => {
      res.status(400).json({
        error: error,
        message: 'Unexpected error, please try again later.'
      });
    });
  });
};

// GET : Get all comments
exports.getAllComments = (req, res, next) => {
  Post.findOne({ _id: req.params.id }).then
  Post.find().then( //'find' returns array of posts
    (posts) => {
        res.status(200).json(posts);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error,
        message: 'Unexpected error, please try again later.'
      });
    }
  );
};

// VIEWS 

// DELETE : Delete a post
// Import post model
const Post = require('../models/post');

// Import the file system
const fs = require('fs'); //fs = file system, includes functions for deleting (unused) files

// POST : Create a sauce
exports.createPost = (req, res, next) => {

  req.body.post = JSON.parse(req.body.post);
  const url = req.protocol + '://' + req.get('host');
  const post = new Post({
      creator: req.body.post.creator,
      userId: req.body.post.userId,
      imageUrl: url + '/images/' + req.file.filename,
      description: req.body.post.description,
      comments: 0,
      likes: 0,
      dislikes: 0,
      usersLiked: req.body.post.usersLiked,
      usersDisliked: req.body.post.usersDisliked
  });

  // Save to database
  sauce.save().then(
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





/* GET FROM PROJECT 6 */
// GET : Retrieve all posts
// GET : Retrieve a post
// PUT : Modify a post
// DELETE : Delete a post
// POST : Like or dislike a post
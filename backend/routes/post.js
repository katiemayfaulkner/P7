const express = require('express');

// Create router, to which you can register routes
const router = express.Router();

// The order of middleware is important, multer must be after auth (so img is saved before authentication is completed)
const auth = require("../middleware/auth");

// Middleware for handling multimedia data (in this case images)
const multer = require('../middleware/multer');

// Controller
const postCtrl = require('../controllers/post');

// Routes 
router.post('', auth, multer, postCtrl.createPost);
router.get( '', auth, postCtrl.getAllPosts);
router.get('/:id', auth, postCtrl.getOnePost);
router.post('/:id/like',auth, postCtrl.likePost);
router.post('/:id/comment', auth, postCtrl.postComment);
router.post('/:id/comments/list')
// router.delete('/:id', auth, postCtrl.deletePost); //DELETE a post - CRUD

// Make router available outside of this file
module.exports = router;
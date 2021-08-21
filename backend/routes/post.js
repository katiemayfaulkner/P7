const express = require('express');
const router = express.Router(); //creates router to which you can register routes to

const auth = require("../middleware/auth");
const multer = require('../middleware/multer');

const postCtrl = require('../controllers/post');

module.exports = router;
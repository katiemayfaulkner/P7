const express = require("express");

// Create router, to which you can register routes
const router = express.Router();
const auth = require('../middleware/auth');

// Controller
const userCtrl = require('../controllers/user');

// Routes -> api/user 
router.post('/signup', auth, userCtrl.signup);
router.post('/login', auth, userCtrl.login);
router.get('/:id', auth, userCtrl.getUser);
router.delete('/:id', auth, userCtrl.deleteUser);

module.exports = router;
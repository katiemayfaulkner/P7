// const express = require("express");

// Create router, to which you can register routes
// const router = express.Router();
// const auth = require('../middleware/auth');

// // Controller
// const userCtrl = require('../controllers/user');

// // Routes -> /api/user 
// // router.post('/signup', auth, userCtrl.signup);
// // router.post('/login', auth, userCtrl.login);
// // router.get('/:id', auth, userCtrl.getUser);
// // router.delete('/:id', auth, userCtrl.deleteUser);
// router.post('/signup', function(req, res){
//   auth, userCtrl.signup
// });

// module.exports = router;

const express = require("express");

// // Create router, to which you can register routes
const router = express.Router();
const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.get("/:id", userCtrl.getOne);
router.put("/:id", userCtrl.modifyUser);
router.delete("/:id", userCtrl.deleteUser);

module.exports = router
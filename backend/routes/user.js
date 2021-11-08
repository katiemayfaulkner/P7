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





// const express = require("express");

// // // Create router, to which you can register routes
// const router = express.Router();
// const userCtrl = require("../controllers/user");

// // Routes -> /api/user 
// router.post("/signup", userCtrl.signup);
// router.get("/:id", userCtrl.getOne);
// router.put("/:id", userCtrl.modifyUser);
// router.delete("/:id", userCtrl.deleteUser);

// module.exports = router





const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

const db = require('../config/database');
const userMiddleware = require('../middleware/user');

// Routes -> /api/user 
router.post('/signup', userMiddleware.validateSignup, (req, res, next) => {
    db.query(
    `SELECT * FROM users WHERE LOWER(email) = LOWER(${db.escape(    //  mask passed parameters to avoid SQL injection 
      req.body.email
    )});`,
    (err, result) => {
      if (result.length) {
        return res.status(409).send({
          msg: 'This email is already in use!'
        });
      } else {
        // email is available
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err
            });
          } else {
            // has hashed pw => add to database
            db.query(
              `INSERT INTO users (user_id, firstName, lastName, email, password) VALUES ('${uuid.v4()}', ${db.escape(   //  mask passed parameters to avoid SQL injection 
                req.body.email
              )}, ${db.escape(hash)}, now())`,  //  mask passed parameters to avoid SQL injection 
              (err, result) => {
                if (err) {
                  throw err;
                  return res.status(400).send({
                    msg: err
                  });
                }
                return res.status(201).send({
                  msg: 'Registered!'
                });
              }
            );
          }
        });
      }
    }
  );
});

router.post('/login', (req, res, next) => {
    db.query(
    `SELECT * FROM users WHERE email = ${db.escape(req.body.email)};`,
    (err, result) => {
      // user does not exist
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err
        });
      }
      if (!result.length) {
        return res.status(401).send({
          msg: 'Email or password is incorrect!'
        });
      }
      // check password
      bcrypt.compare(
        req.body.password,
        result[0]['password'],
        (bErr, bResult) => {
          // wrong password
          if (bErr) {
            throw bErr;
            return res.status(401).send({
              msg: 'Email or password is incorrect!'
            });
          }
          if (bResult) {
            const token = jwt.sign({
                email: result[0].email,
                userId: result[0].user_id
              },
              'SECRETKEY', {
                expiresIn: '7d'
              }
            );
            db.query(
              `UPDATE users SET last_login = now() WHERE id = '${result[0].user_id}'`
            );
            return res.status(200).send({
              msg: 'Logged in!',
              token,
              user: result[0]
            });
          }
          return res.status(401).send({
            msg: 'Email or password is incorrect!'
          });
        }
      );
    }
  );
});

router.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
    console.log(req.userData);
    res.send('This is the secret content. Only logged in users can see that!');
});
module.exports = router;
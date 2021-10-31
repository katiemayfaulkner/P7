const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('../config/database');
const User = require('../models/user');

// SIGNUP
exports.signup = (req, res, next) => {
  User.findOne({ email: req.body.email }).then( //check if entered email corresponds to an existing user in database
  (user) => {
      if (user) { //if not, return error, if corresponds, continue
        return res.status(401).json({
          error: new Error('Email already in use!')
        });
      }
    }
  )

  const strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');

  // If password is strong (meets regex requirements and is >= 8 characters), continue
  if(strongPassword.test(req.body.password) && req.body.password.length >= 8) {
    
    // If no existing user is found and psw is strong, call bycrypt function and ask it to salt password x10 (higher value = more security)
    bcrypt.hash(req.body.password, 10).then(
      (hash) => {
        const user = new User({
          email: req.body.email,
          password: hash
        });
        // Create new user and save to database
        User.create({
          firstName,
          lastName,
          email,
          password
        })
        .then(
          () => {
            res.status(201).json({
              message: 'User added successfully!'
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        );
      }
    );

  } else {
    // Pass error if it's a weak password
    res.status(400).json({
        message: "Weak password. Password must be at least 8 characters, and contain at least one uppercase, one lowercase, one number and a special character!"
    });
  };
};

// LOGIN
exports.login = (req, res, next) => {
  User.findOne({ username: req.body.email }).then( //check if entered username corresponds to an existing user in database
    (user) => {
        if (!user) { //if not, return error, if corresponds, continue
        return res.status(401).json({
          error: error,
          message: 'User not found!'
        });
      }
      bcrypt.compare(req.body.password, user.password).then( //compare entered password with saved hash in database
        (valid) => {
          if (!valid) { //if invalid, return error, if valid, users credentials = valid
            return res.status(401).json({
              error: error, 
              message: 'Incorrect password!'
            });
          }
          const token = jwt.sign( //encode new token
              { userId: user._id }, //token contains users id as payload
              'RANDOM_TOKEN_SECRET_WHICH_IS_LONG_BECAUSE_IT_IS_MORE_SECURE', //temp dev secret string to encode token 
              {expiresIn: '24h' }); //valid for 24h
          res.status(200).json({ // if valid, return 200 response, id, and token
            userId: user._id,
            token: token
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error
          });
        }
      );
    }
  ).catch(
    (error) => {
      res.status(500).json({
        error: error
      });
    }
  );
}


// get and delete

// // GET USER
// exports.getUser = (req, res, next) => {
//     console.log(req.params.id);
//     User.findOne({where: {username: req.params.id}}).then(
//         (user) => {
//             res.status(200).json(user)
//         }
//     ).catch(
//         (error) => {
//             res.status(400).json({
//                 error: error
//             });
//         }
//     );
// }

// // DELETE USER
// exports.deleteUser = (req, res, next) => {
//     User.findOne({where: {username: req.params.id}}).then(
//         (user) => {
//             user.destroy().then(
//                 () => {
//                 res.status(201).json({
//                     message: 'User deleted successfully!'
//                 });
//             }
//             );
//             res.sendStatus(200);
//         }
//     ).catch(
//         (error) => {
//             res.status(400).json({
//                 error: error
//             });
//         }
//     );
// }
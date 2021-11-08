// const { Op } = require('sequelize');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const db = require('../config/database');
// const User = require('../models/user');

// // SIGNUP
// exports.signup = (req, res, next) => {
//   console.log("DELETE");
//   /**
//    * In MySQL, use either:
//    * - PLAIN/VANILLA: MySQL Queries (SQL)
//    * - ORM -> 
//    */
//   User.findOne({ where: { email: req.body.email } }).then( //check if entered email corresponds to an existing user in database
//   (user) => {
//       if (user) { //if not, return error, if corresponds, continue
//         return res.status(401).json({
//           error: new Error('Email already in use!')
//         });
//       }
//     }
//   )

//   const strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');

//   // If password is strong (meets regex requirements and is >= 8 characters), continue
//   if(strongPassword.test(req.body.password) && req.body.password.length >= 8) {
    
//     // If no existing user is found and psw is strong, call bycrypt function and ask it to salt password x10 (higher value = more security)
//     bcrypt.hash(req.body.password, 10).then(
//       (hash) => {
//         const user = new User({
//           firstName: req.body.firstName,
//           lastName: req.body.lastName,
//           email: req.body.email,
//           password: hash
//         });
//         // Create new user and save to database
//         User.save()
//         .then(
//           () => {
//             res.status(201).json({
//               message: 'User added successfully!'
//             });
//           }
//         ).catch(
//           (error) => {
//             res.status(500).json({
//               error: error
//             });
//           }
//         );
//       }
//     );
//   } else {
//     // Pass error if it's a weak password
//     res.status(400).json({
//         message: "Weak password. Password must be at least 8 characters, and contain at least one uppercase, one lowercase, one number and a special character!"
//     });
//   };
// };

// // LOGIN
// exports.login = (req, res, next) => {
//   User.findOne({ username: req.body.email }).then( //check if entered username corresponds to an existing user in database
//     (user) => {
//         if (!user) { //if not, return error, if corresponds, continue
//         return res.status(401).json({
//           error: error,
//           message: 'User not found!'
//         });
//       }
//       bcrypt.compare(req.body.password, user.password).then( //compare entered password with saved hash in database
//         (valid) => {
//           if (!valid) { //if invalid, return error, if valid, users credentials = valid
//             return res.status(401).json({
//               error: error, 
//               message: 'Incorrect password!'
//             });
//           }
//           const token = jwt.sign( //encode new token
//               { userId: user._id }, //token contains users id as payload
//               'RANDOM_TOKEN_SECRET_WHICH_IS_LONG_BECAUSE_IT_IS_MORE_SECURE', //temp dev secret string to encode token 
//               {expiresIn: '24h' }); //valid for 24h
//           res.status(200).json({ // if valid, return 200 response, id, and token
//             userId: user._id,
//             token: token
//           });
//         }
//       ).catch(err => res.render('error', {error:err.message}))
//     }
//   ).catch(err => res.render('error', {error:err.message}))
// }

// // GET USER
// exports.getUser = (req, res, next) => {
//     console.log(req.params.id);
//     User.findOne({where: {email: req.params.id}}).then(
//         (user) => {
//             res.status(200).json(user)
//         }
//     ).catch(err => res.render('error', {error:err.message}))
// }

// // DELETE USER
// exports.deleteUser = (req, res, next) => {
//     User.findOne({where: {email: req.params.id}}).then(
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
//     ).catch(err => res.render('error', {error:err.message}))
// }

// const User = require("../models/user");
// const bcrypt = require("bcrypt");

// // Create and Save a new user
// exports.create = async (req, res) => {

//   // Save user to Database
//     let { firstName, lastName, email, password } = req.body;
//     password = bcrypt.hashSync(req.body.password, 10);

//    // Validate request
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//   }else {
//     // Insert into table
//     User.create({
//       firstName,
//       lastName,
//       email,
//       password,
//     })
//     .then(gig => res.sendStatus(200))
//     .catch(err => res.render('error', {error:err.message}))
//   }
// };

// module.exports = User










// const User = require("../models/user");

// exports.signup = (req, res,) => {
//   // Create a user
//   const user = new User({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     password: req.body.password,
//   });

//   // Save user in the database
//   User.create(user, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "An error occurred while creating the user."
//       });
//     else res.send(data);
//   });
// };

// exports.getOne = (req, res) => {
//   User.findById(req.params.user_id, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Failed to find user with id ${req.params.user_id}.`
//         });
//       } else {
//         res.status(500).send({
//           message: "Error retrieving user with id " + req.params.user_id
//         });
//       }
//     } else res.send(data);
//   });
// };

// exports.modifyUser = (req, res) => {
//   User.updateById(
//     req.params.user_id,
//     new User(req.body),
//     (err, data) => {
//       if (err) {
//         if (err.kind === "not_found") {
//           res.status(404).send({
//             message: `Failed to find user with id ${req.params.user_id}.`
//           });
//         } else {
//           res.status(500).send({
//             message: "Error updating user with id " + req.params.user_id
//           });
//         }
//       } else res.send(data);
//     }
//   );
// };

// exports.deleteUser = (req, res) => {
//   User.remove(req.params.user_id, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Failed to find user with id ${req.params.user_id}.`
//         });
//       } else {
//         res.status(500).send({
//           message: "Could not delete user with id " + req.params.user_id
//         });
//       }
//     } else res.send({ message: `User deleted successfully!` });
//   });
// };
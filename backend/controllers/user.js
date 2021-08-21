const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); //jwt = json web token

const db = require('../config/database');
const User = require('../models/user');
const config = require('../config/authConfig');

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

  User.findOne({ username: req.body.username }).then( //check if entered username corresponds to an existing user in database
  (user) => {
      if (user) { //if not, return error, if corresponds, continue
        return res.status(401).json({
          error: new Error('Username already in use!')
        });
      }
    }
  )

  bcrypt.hash(req.body.password, 10).then( //call bycrypt function and ask it to salt password x10 (higher value = more security)
    (hash) => {
      const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: hash
      });
      user.save().then( //Create new user and save to database
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
};

exports.login = (req, res, next) => {
  User.findOne({ username: req.body.username }).then( //check if entered username corresponds to an existing user in database
    (user) => {
        if (!user) { //if not, return error, if corresponds, continue
        return res.status(401).json({
          error: new Error('User not found!')
        });
      }
      bcrypt.compare(req.body.password, user.password).then( //compare entered password with saved hash in database
        (valid) => {
          if (!valid) { //if invalid, return error, if valid, users credentials = valid
            return res.status(401).json({
              error: new Error('Incorrect password!')
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

exports.getUser = (req, res) => {
    console.log(req.params.id);
    User.findOne({where: {username: req.params.id}}).then(
        (user) => {
            res.status(200).json(user)
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.deleteUser = (req, res) => {
    User.findOne({where: {username: req.params.id}}).then(
        (user) => {
            user.destroy().then(
                () => {
                res.status(201).json({
                    message: 'User added successfully!'
                });
            }
            );
            res.sendStatus(200);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}



//OR USE THIS



//user = {};
exports.signup = (req, res, next) => {

    // Save User to Database
    let { username, email, password } = req.body;
    password = bcrypt.hashSync(req.body.password, 10);

    let errors = [];

    // Validate Fields
    if(!username) {
      errors.push({ text: 'Please add a username' });
    }
    if(!email) {
      errors.push({ text: 'Please add email' });
    }
    if(!password) {
      errors.push({ text: 'Please add a password' });
    }

    // Check for errors
    if(errors.length > 0) {
      res.render('add', {
        errors,
      });
    } else {

      // Insert into table
      User.create({
        username,
        email,
        password,
      })
        .then(gig => res.sendStatus(200))
        .catch(err => res.render('error', {error:err.message}))
    }
};

exports.signin = (req, res) => {
    User.findOne({ where: { username: req.body.username } }).then(
        (user) => {
            if (!user) {
                return res.status(401).json({
                    error: new Error('User not found!')
                });
            }

            bcrypt.compare(req.body.password, user.password).then(
                (valid) => {
                    if (!valid) {
                        return res.status(401).json({
                            error: new Error('Incorrect password!')
                        });
                    }
                    const token = jwt.sign(
                        { id: user._id },
                        config.secret,
                        { expiresIn: 86400 },
                    );

                    res.status(200).json(
                        {
                            user: user,
                            token: token
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
    ).catch(
        (error) => {
            res.status(500).json({
                error: error
            });
        }
    );
}

exports.getUser = (req, res) => {
    console.log(req.params.id);
    User.findOne({where: {username: req.params.id}}).then(
        (user) => {
            res.status(200).json(user)
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.deleteUser = (req, res) => {
    User.findOne({where: {username: req.params.id}}).then(
        (user) => {
            user.destroy();
            res.sendStatus(200);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}
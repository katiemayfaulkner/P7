const jwt = require("jsonwebtoken");

module.exports = {
  validateSignup: (req, res, next) => {
    // email min length 10
    if (!req.body.email || req.body.email.length < 2) {
      return res.status(400).send({
        msg: 'Please enter an email with min. 10 chars'
      });
    }
    // password min 8 chars
    if (!req.body.password || req.body.password.length < 8) {
      return res.status(400).send({
        msg: 'Please enter a password with min. 8 chars'
      });
    }
    // password (repeat) does not match
    if (
      !req.body.password_repeat ||
      req.body.password != req.body.password_repeat
    ) {
      return res.status(400).send({
        msg: 'Both passwords must match'
      });
    }
    next();
  },

  isLoggedIn: (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(
      token,
      'project7-extremely-secret-key-for-security'
    );
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).send({
      msg: 'Your session is not valid!'
    });
  }
}
};
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

const User = require('../models/user');

// Display Sign Up on GET
exports.signupGet = (req, res) => {
  res.render('signup', { title: 'Sign Up' });
};

// Display Sign Up form on POST
exports.signupPost = [
  // Validate fields.
  body('firstName').isLength({ min: 1 }).trim().withMessage('First Name must be specified.')
    .isAlphanumeric()
    .withMessage('First Name has non-alphanumeric characters.'),
  body('lastName').isLength({ min: 1 }).trim().withMessage('Last Name must be specified.')
    .isAlphanumeric()
    .withMessage('Last Name has non-alphanumeric characters.'),
  body('username').isLength({ min: 1 }).trim().withMessage('Username must be specified.')
    .isEmail()
    .withMessage('Must be a valid email address'),
  body('password', 'Password must be at least 8 characters long')
    .trim()
    .isLength({ min: 8 }),
  body('confirmPassword', 'Passwords must match')
    .trim()
    .custom((value, { req }) => value === req.body.password),

  // Sanitize fields.
  sanitizeBody('firstName').escape(),
  sanitizeBody('lastName').escape(),
  sanitizeBody('username').escape(),
  sanitizeBody('password').escape(),
  sanitizeBody('confirmPassword').escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: req.body.password,
    });

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/errors messages.
      res.render('signup', {
        title: 'Sign Up',
        user,
        errors: errors.array(),
      });
    } else {
      User.findOne({ username: req.body.email }).exec((err, foundUser) => {
        if (err) return next(err);
        if (foundUser) {
          const duplicateUser = { msg: 'Username already in use' };
          errors.errors.push(duplicateUser);

          res.render('signup', {
            title: 'Sign Up',
            user,
            errors: errors.array(),
          });
        } else {
          user.save(() => {
            if (err) return next(err);
            return res.redirect('/');
          });
        }
      });
    }
  },
];

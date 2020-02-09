const express = require('express');

const router = express.Router();

const signupController = require('../controllers/signupController');
const loginController = require('../controllers/loginController');

// GET home page.
router.get('/', (req, res) => {
  res.render('index', { page: 'Home', menuId: 'home', title: 'Private club' });
  // res.redirect('/private-club');
});

// GET sign up form
router.get('/signup', signupController.signupGet);

// POST request to sign up
router.post('/signup', signupController.signupPost);

// GET login in form
router.get('/login', loginController.loginGet);

// POST request to sign up
// router.post('/signup', index_controller.user_signup_post);

module.exports = router;

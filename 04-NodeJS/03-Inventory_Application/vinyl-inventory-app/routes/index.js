const express = require('express');

const router = express.Router();

// GET home page.
router.get('/', (req, res) => {
  res.render('index', { page: 'Home', menuId: 'home' });
  res.redirect('/inventory');
});

module.exports = router;

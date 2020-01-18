const express = require('express');

const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toLocaleDateString(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleDateString(),
  }];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});

router.get('/new', (req, res, next) => {
  res.render('form');
});

router.post('/new', (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date().toLocaleDateString(),
  });
  res.redirect('/');
});

module.exports = router;

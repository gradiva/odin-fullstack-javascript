const express = require('express');

const router = express.Router();

const messageController = require('../controllers/messageController');

// GET catalog home page.
router.get('/', messageController.index);

// GET request for list of all post items.
router.get('/posts', messageController.messageList);

// GET, Create post
router.get('/posts/:id', messageController.messageCreateGet);

// POST, Create post
router.post('/posts/:id', messageController.messageCreatePost);

module.exports = router;

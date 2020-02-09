const async = require('async');

const Message = require('../models/message');

exports.index = (req, res) => {
  async.parallel({
    messageCount: (callback) => {
      Message.countDocuments({}, callback);
    },
  }, (err, results) => {
    res.render('index', {
      title: 'Home',
      error: err,
      data: results,
    });
  });
};

// Display list of all messages.
exports.messageList = (req, res, next) => {
  Message.find()
    .sort([['timestamp', 'ascending']])
    .exec((err, listMessages) => {
      if (err) { return next(err); }
      // Successful, so render
      res.render('messageList', {
        title: 'message List',
        messageList: listMessages,
      });
      return undefined;
    });
};

// Display detail page for a specific message.
exports.messageDetail = (req, res) => {
  res.send(`NOT IMPLEMENTED: message detail: ${req.params.id}`);
};

// Display message create form on GET.
exports.messageCreateGet = (req, res) => {
  res.send('NOT IMPLEMENTED: message create GET');
};

// Handle message create on POST.
exports.messageCreatePost = (req, res) => {
  res.send('NOT IMPLEMENTED: message create POST');
};

// Display message delete form on GET.
exports.messageDeleteGet = (req, res) => {
  res.send('NOT IMPLEMENTED: message delete GET');
};

// Handle message delete on POST.
exports.messageDeletePost = (req, res) => {
  res.send('NOT IMPLEMENTED: message delete POST');
};

// Display message update form on GET.
exports.messageUpdateGet = (req, res) => {
  res.send('NOT IMPLEMENTED: message update GET');
};

// Handle message update on POST.
exports.messageUpdatePost = (req, res) => {
  res.send('NOT IMPLEMENTED: message update POST');
};

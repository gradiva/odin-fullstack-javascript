const async = require('async');
const mongoose = require('mongoose');

const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

const Album = require('../models/album');
const Artist = require('../models/artist');
const Genre = require('../models/genre');

exports.index = (req, res) => {
  async.parallel({
    albumCount: (callback) => {
      Album.countDocuments({}, callback);
    },
    artistCount: (callback) => {
      Artist.countDocuments({}, callback);
    },
    genreCount: (callback) => {
      Genre.countDocuments({}, callback);
    },
  }, (err, results) => {
    res.render('index', {
      title: 'Vinyl Home',
      error: err,
      data: results,
    });
  });
};

// Display list of all Albums.
exports.albumList = (req, res, next) => {
  Album.find({}, 'title artist')
    .populate('artist')
    .exec((err, listAlbums) => {
      if (err) { return next(err); }
      // Successful, so render
      res.render('albumList', {
        title: 'Album List',
        albumList: listAlbums,
      });
      return undefined;
    });
};

// Display detail page for a specific Album.
exports.albumDetail = (req, res, next) => {
  const id = mongoose.Types.ObjectId(req.params.id);

  async.parallel({
    album: (callback) => {
      Album.findById(req.params.id)
        .populate('artist')
        .populate('genre')
        .exec(callback);
    },
  }, (err, results) => {
    if (err) { return next(err); }
    if (results.album == null) { // No results.
      err = new Error('album not found');
      err.status = 404;
      return next(err);
    }
    // Successful, so render.
    return res.render('albumDetail', {
      title: results.album.title,
      album: results.album,
    });
  });
};

// Display Album create form on GET.
exports.albumCreateGet = (req, res, next) => {
  // Get all artists and genres, which we can use for adding to our album.
  async.parallel({
    artists: (callback) => {
      Artist.find(callback);
    },
    genres: (callback) => {
      Genre.find(callback);
    },
  }, (err, results) => {
    if (err) { return next(err); }
    return res.render('albumForm', {
      title: 'Create Album',
      artists: results.artists,
      genres: results.genres,
    });
  });
};

// Handle Album create on POST.
exports.albumCreatePost = [
  // Convert the genre to an array.
  (req, res, next) => {
    if (!(req.body.genre instanceof Array)) {
      if (typeof req.body.genre === 'undefined') {
        req.body.genre = [];
      } else { req.body.genre = new Array(req.body.genre); }
    }
    next();
  },

  // Validate fields.
  body('title', 'Title must not be empty.').isLength({ min: 1 }).trim(),
  body('artist', 'Artist must not be empty.').isLength({ min: 1 }).trim(),
  body('releaseDate', 'Release date must not be empty').isLength({ checkFalsy: true }).isISO8601(),
  body('length', 'Length must not be empty.').isLength({ min: 1 }).trim(),
  body('genre', 'Genre must not be empty').isLength({ min: 1 }).trim(),

  // Sanitize fields (using wildcard).
  sanitizeBody('*').escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);
    // Create an Album object with escaped and trimmed data.
    const album = new Album(
      {
        title: req.body.title,
        artist: req.body.artist,
        releaseDate: req.body.releaseDate,
        length: req.body.length,
        genre: req.body.genre,
      },
    );

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/error messages.

      // Get all artists and genres for form.
      async.parallel({
        artists: (callback) => {
          Artist.find(callback);
        },
        genres: (callback) => {
          Genre.find(callback);
        },
      }, (err, results) => {
        if (err) {
          return next(err);
        }

        // Mark our selected genres as checked.
        for (let i = 0; i < results.genres.length; i += 1) {
          if (album.genre.indexOf(results.genres[i]._id) > -1) {
            results.genres[i].checked = 'true';
          }
        }
        return res.render('albumForm', {
          title: 'Create album',
          artists: results.artists,
          genres: results.genres,
          album,
          errors: errors.array(),
        });
      });
    } else {
      // Data from form is valid. Save album.
      album.save((err) => {
        if (err) { return next(err); }
        // successful - redirect to new album record.
        return res.redirect(album.url);
      });
    }
  },
];

// Display Album delete form on GET.
exports.albumDeleteGet = (req, res, next) => {
  async.parallel({
    album: (callback) => {
      Album.findById(req.params.id).populate('artist').populate('genre').exec(callback);
    },
  }, (err, results) => {
    if (err) { return next(err); }
    if (results.album == null) { // No results.
      res.redirect('/inventory/albums');
    }
    // Successful, so render.
    return res.render('albumDelete', {
      title: 'Delete album',
      album: results.album,
    });
  });
};

// Handle Album delete on POST.
exports.albumDeletePost = (req, res, next) => {
  async.parallel({
    album: (callback) => {
      Album.findById(req.body.id).populate('artist').populate('genre').exec(callback);
    },
  }, (err) => {
    if (err) { return next(err); }
    // Success
    return Album.findByIdAndRemove(req.body.id, () => {
      if (err) { return next(err); }
      // Success - got to albums list.
      return res.redirect('/inventory/albums');
    });
  });
};

// Display Album update form on GET.
exports.albumUpdateGet = (req, res, next) => {
  // Get album, artists and genres for form.
  async.parallel({
    album: (callback) => {
      Album.findById(req.params.id).populate('artist').populate('genre').exec(callback);
    },
    artists: (callback) => {
      Artist.find(callback);
    },
    genres: (callback) => {
      Genre.find(callback);
    },
  }, (err, results) => {
    if (err) { return next(err); }
    if (results.album == null) { // No results.
      err = new Error('Album not found');
      err.status = 404;
      return next(err);
    }
    // Success.
    // Mark our selected genres as checked.
    for (let all_g_iter = 0; all_g_iter < results.genres.length; all_g_iter += 1) {
      for (let album_g_iter = 0; album_g_iter < results.album.genre.length; album_g_iter += 1) {
        if (results.genres[all_g_iter]._id.toString() == results.album.genre[album_g_iter]._id.toString()) {
          results.genres[all_g_iter].checked = 'true';
        }
      }
    }
    return res.render('albumForm', {
      title: 'Update album',
      artists: results.artists,
      genres: results.genres,
      album: results.album,
    });
  });
};

// Handle Album update on POST.
exports.albumUpdatePost = [
  // Convert the genre to an array.
  (req, res, next) => {
    if (!(req.body.genre instanceof Array)) {
      if (typeof req.body.genre === 'undefined') {
        req.body.genre = [];
      } else { req.body.genre = new Array(req.body.genre); }
    }
    next();
  },

  // Validate fields.
  body('title', 'Title must not be empty.').isLength({ min: 1 }).trim(),
  body('artist', 'Artist must not be empty.').isLength({ min: 1 }).trim(),
  body('releaseDate', 'Invalid release date').optional({ checkFalsy: true }).isISO8601(),
  body('length', 'Length must not be empty.').isLength({ min: 1 }).trim(),
  body('genre', 'Genre must not be empty').isLength({ min: 1 }).trim(),

  // Sanitize fields.
  sanitizeBody('title').escape(),
  sanitizeBody('artist').escape(),
  sanitizeBody('releaseDate').escape(),
  sanitizeBody('length').escape(),
  sanitizeBody('genre.*').escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);
    // Create a album object with escaped/trimmed data and old id.
    const album = new Album(
      {
        title: req.body.title,
        artist: req.body.artist,
        releaseDate: req.body.releaseDate,
        length: req.body.length,
        genre: (typeof req.body.genre === 'undefined') ? [] : req.body.genre,
        _id: req.params.id, // This is required, or a new ID will be assigned!
      },
    );
    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/error messages.

      // Get all artists and genres for form
      async.parallel({
        artists: (callback) => {
          Artist.find(callback);
        },
        genres: (callback) => {
          Genre.find(callback);
        },
      }, (err, results) => {
        if (err) { return next(err); }

        // Mark our selected genres as checked.
        for (let i = 0; i < results.genres.length; i += 1) {
          if (album.genre.indexOf(results.genres[i]._id) > -1) {
            results.genres[i].checked = 'true';
          }
        }
        return res.render('albumForm', {
          title: 'Update album',
          artists: results.artists,
          genres: results.genres,
          album,
          errors: errors.array(),
        });
      });
    } else {
      // Data from form is valid. Update the record.
      album.findByIdAndUpdate(req.params.id, album, {}, (err, thealbum) => {
        if (err) { return next(err); }
        // Successful - redirect to album detail page.
        return res.redirect(thealbum.url);
      });
    }
  },
];

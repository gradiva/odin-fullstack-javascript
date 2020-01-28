const async = require('async');

const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

const Artist = require('../models/artist');
const Album = require('../models/album');

// Display list of all Artists.
exports.artistList = (req, res, next) => {
  Artist.find()
    .sort([['family_name', 'ascending']])
    .exec((err, listArtists) => {
      if (err) { return next(err); }
      // Successful, so render
      res.render('artistList', {
        title: 'artist List',
        artistList: listArtists,
      });
      return undefined;
    });
};
// Display detail page for a specific Artist.
exports.artistDetail = (req, res, next) => {
  async.parallel({
    artist: (callback) => {
      Artist.findById(req.params.id)
        .exec(callback);
    },
    artistsAlbums: (callback) => {
      Album.find({ artist: req.params.id }, 'title releaseDate')
        .exec(callback);
    },
  }, (err, results) => {
    if (err) { return next(err); } // Error in API usage.
    if (results.artist == null) { // No results.
      err = new Error('Artist not found');
      err.status = 404;
      return next(err);
    }
    // Successful, so render.
    return res.render('artistDetail', {
      title: 'artist Detail',
      artist: results.artist,
      artistAlbums: results.artistsAlbums,
    });
  });
};


// Display Artist create form on GET.
exports.artistCreateGet = (req, res) => {
  res.render('artistForm', { title: 'Create Artist' });
};

// Handle Artist create on POST.
exports.artistCreatePost = [
  // Validate fields.
  body('name').isLength({ min: 1 }).trim().withMessage('Name must be specified.')
    .isAlphanumeric()
    .withMessage('Name has non-alphanumeric characters.'),
  body('country').isLength({ min: 1 }).trim().withMessage('Country must be specified.')
    .isAlphanumeric()
    .withMessage('Country has non-alphanumeric characters.'),
  body('foundationDate', 'Invalid date of foundation').optional({ checkFalsy: true }).isISO8601(),
  body('dissolutionDate', 'Invalid date of dissolution').optional({ checkFalsy: true }).isISO8601(),

  // Sanitize fields.
  sanitizeBody('name').escape(),
  sanitizeBody('country').escape(),
  sanitizeBody('foundationDate').toDate(),
  sanitizeBody('dissolutionDate').toDate(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/errors messages.
      res.render('artistForm', {
        title: 'Create Artist',
        artist: req.body,
        errors: errors.array(),
      });
    } else {
      // Data from form is valid.
      // Create an artist object with escaped and trimmed data.
      const artist = new Artist(
        {
          name: req.body.name,
          country: req.body.country,
          foundationDate: req.body.foundationDate,
          dissolutionDate: req.body.dissolutionDate,
        },
      );
      artist.save((err) => {
        if (err) { return next(err); }
        // Successful - redirect to new artist record.
        return res.redirect(artist.url);
      });
    }
  },
];

// Display Artist delete form on GET.
exports.artistDeleteGet = (req, res, next) => {
  async.parallel({
    artist: (callback) => {
      Artist.findById(req.params.id).exec(callback);
    },
    artistsAlbums: (callback) => {
      Album.find({ artist: req.params.id }).exec(callback);
    },
  }, (err, results) => {
    if (err) { return next(err); }
    if (results.artist == null) { // No results.
      res.redirect('/inventory/artists');
    }
    // Successful, so render.
    return res.render('artistDelete', {
      title: 'Delete artist',
      artist: results.artist,
      artistAlbums: results.artistsAlbums,
    });
  });
};

// Handle Artist delete on POST.
exports.artistDeletePost = (req, res, next) => {
  async.parallel({
    artist: (callback) => {
      Artist.findById(req.body.artistid).exec(callback);
    },
    artistsAlbums: (callback) => {
      Album.find({ artist: req.body.artistid }).exec(callback);
    },
  }, (err, results) => {
    if (err) { return next(err); }
    // Success
    if (results.artistsAlbums.length > 0) {
      // artist has albums. Render in same way as for GET route.
      return res.render('artistDelete', {
        title: 'Delete artist',
        artist: results.artist,
        artistAlbums: results.artistsAlbums,
      });
    }
    // artist has no albums. Delete object and redirect to the list of artists.
    return Artist.findByIdAndRemove(req.body.artistid, () => {
      if (err) { return next(err); }
      // Success - go to artist list
      return res.redirect('/inventory/artists');
    });
  });
};

// Display Artist update form on GET.
exports.artistUpdateGet = (req, res, next) => {
  Artist.findById(req.params.id, (err, artist) => {
    if (err) { return next(err); }
    if (artist == null) { // No results.
      err = new Error('Artist not found');
      err.status = 404;
      return next(err);
    }
    // Success.
    return res.render('artistForm', {
      title: 'Update Artist',
      artist,
    });
  });
};

// Handle Artist update on POST.
exports.artistUpdatePost = [
  // Validate fields.
  body('name').isLength({ min: 1 }).trim().withMessage('Name must be specified.')
    .isAlphanumeric()
    .withMessage('Name has non-alphanumeric characters.'),
  body('country').isLength({ min: 1 }).trim().withMessage('Country must be specified.')
    .isAlphanumeric()
    .withMessage('Country has non-alphanumeric characters.'),
  body('foundationDate', 'Invalid date of foundation').optional({ checkFalsy: true }).isISO8601(),
  body('dissolutionDate', 'Invalid date of dissolution').optional({ checkFalsy: true }).isISO8601(),

  // Sanitize fields.
  sanitizeBody('name').escape(),
  sanitizeBody('country').escape(),
  sanitizeBody('foundationDate').toDate(),
  sanitizeBody('dissolutionDate').toDate(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);
    // Create Artist object with escaped and trimmed data (and the old id!)
    const artist = new Artist(
      {
        name: req.body.name,
        country: req.body.country,
        foundationDate: req.body.foundationDate,
        dissolutionDate: req.body.dissolutionDate,
        _id: req.params.id,
      },
    );
    if (!errors.isEmpty()) {
      // There are errors. Render the form again with sanitized values and error messages.
      res.render('artistForm', {
        title: 'Update Artist',
        artist,
        errors: errors.array(),
      });
    } else {
      // Data from form is valid. Update the record.
      Artist.findByIdAndUpdate(req.params.id, artist, {}, (err, theartist) => {
        if (err) { return next(err); }
        // Successful - redirect to genre detail page.
        return res.redirect(theartist.url);
      });
    }
  },
];

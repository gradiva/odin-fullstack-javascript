const express = require('express');

const router = express.Router();

// Require controller modules.
const albumController = require('../controllers/albumController');
const artistController = require('../controllers/artistController');
const genreController = require('../controllers/genreController');

// / ALBUM ROUTES ///

// GET catalog home page.
router.get('/', albumController.index);

// GET request for creating a album. NOTE This must come before routes that display album (uses id).
router.get('/album/create', albumController.albumCreateGet);

// POST request for creating album.
router.post('/album/create', albumController.albumCreatePost);

// GET request to delete album.
router.get('/album/:id/delete', albumController.albumDeleteGet);

// POST request to delete album.
router.post('/album/:id/delete', albumController.albumDeletePost);

// GET request to update album.
router.get('/album/:id/update', albumController.albumUpdateGet);

// POST request to update album.
router.post('/album/:id/update', albumController.albumUpdatePost);

// GET request for one album.
router.get('/album/:id', albumController.albumDetail);

// GET request for list of all album items.
router.get('/albums', albumController.albumList);

// / ARTIST ROUTES ///

// GET request for creating artist. NOTE This must come before route for id (i.e. display artist).
router.get('/artist/create', artistController.artistCreateGet);

// POST request for creating artist.
router.post('/artist/create', artistController.artistCreatePost);

// GET request to delete artist.
router.get('/artist/:id/delete', artistController.artistDeleteGet);

// POST request to delete artist.
router.post('/artist/:id/delete', artistController.artistDeletePost);

// GET request to update artist.
router.get('/artist/:id/update', artistController.artistUpdateGet);

// POST request to update artist.
router.post('/artist/:id/update', artistController.artistUpdatePost);

// GET request for one artist.
router.get('/artist/:id', artistController.artistDetail);

// GET request for list of all artists.
router.get('/artists', artistController.artistList);

// / GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/genre/create', genreController.genreCreateGet);

// POST request for creating Genre.
router.post('/genre/create', genreController.genreCreatePost);

// GET request to delete Genre.
router.get('/genre/:id/delete', genreController.genreDeleteGet);

// POST request to delete Genre.
router.post('/genre/:id/delete', genreController.genreDeletePost);

// GET request to update Genre.
router.get('/genre/:id/update', genreController.genreUpdateGet);

// POST request to update Genre.
router.post('/genre/:id/update', genreController.genreUpdatePost);

// GET request for one Genre.
router.get('/genre/:id', genreController.genreDetail);

// GET request for list of all Genre.
router.get('/genres', genreController.genreList);

module.exports = router;

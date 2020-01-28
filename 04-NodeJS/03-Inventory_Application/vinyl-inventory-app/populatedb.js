#! /usr/bin/env node
console.log('This script populates some albums, artists, and genres');
// Get arguments passed on command line
const userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
const async = require('async');
const mongoose = require('mongoose');

const Album = require('./models/album');
const Artist = require('./models/artist');
const Genre = require('./models/genre');

const mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const artists = [];
const genres = [];
const albums = [];

function albumCreate(title, artist, releaseDate, length, genre, cb) {
  const albumDetail = {
    title,
    artist,
    releaseDate,
    length,
    genre,
  };
  if (genre !== false) albumDetail.genre = genre;

  const album = new Album(albumDetail);
  album.save((err) => {
    if (err) {
      cb(err, null);
      return;
    }
    console.log(`New Album: ${album}`);
    albums.push(album);
    cb(null, album);
  });
}

function artistCreate(name, country, foundateD, dissolutionD, cb) {
  const artistDetail = {
    name,
    country,
    foundateD,
    dissolutionD,
  };
  if (foundateD !== false) artistDetail.foundationDate = foundateD;
  if (dissolutionD !== false) artistDetail.dissolutionDate = dissolutionD;

  const artist = new Artist(artistDetail);
  artist.save((err) => {
    if (err) {
      cb(err, null);
      return;
    }
    console.log(`New Artist: ${artist}`);
    artists.push(artist);
    cb(null, artist);
  });
}

function genreCreate(name, cb) {
  const genre = new Genre({ name });
  genre.save((err) => {
    if (err) {
      cb(err, null);
      return;
    }
    console.log(`New Genre: ${genre}`);
    genres.push(genre);
    cb(null, genre);
  });
}

function createGenreArtists(cb) {
  async.series(
    [
      function (callback) {
        artistCreate('King Crimson', 'London UK', '1968', false, callback);
      },
      function (callback) {
        artistCreate('Pink Floyd', 'London UK', '1965', '1995', callback);
      },
      function (callback) {
        artistCreate('Rush', 'Toronto Canada', '1968', '2018', callback);
      },
      function (callback) {
        artistCreate('Tool', 'Los Angeles USA', '1990', false, callback);
      },
      function (callback) {
        artistCreate('Ghost', 'Linköping Sweden', '2006', false, callback);
      },
      function (callback) {
        artistCreate('Rage Against the Machine', 'Los Angeles USA', '1991', false, callback);
      },
      function (callback) {
        artistCreate('Genesis', 'Surrey UK', '1967', '1998', callback);
      },
      function (callback) {
        genreCreate('Prog Rock', callback);
      },
      function (callback) {
        genreCreate('Rap Metal', callback);
      },
      function (callback) {
        genreCreate('Funk Metal', callback);
      },
      function (callback) {
        genreCreate('Hard Rock', callback);
      },
      function (callback) {
        genreCreate('Heavy Metal', callback);
      },
      function (callback) {
        genreCreate('Progressive Metal', callback);
      },
      function (callback) {
        genreCreate('Experimental Rock', callback);
      },
      function (callback) {
        genreCreate('Art Rock', callback);
      },
    ],
    // Optional cb
    cb,
  );
}

function createAlbums(cb) {
  async.parallel(
    [
      function (callback) {
        const release = new Date(1969, 10, 10);
        albumCreate(
          'In The Court of the Crimson King',
          artists[0],
          release,
          '43:56',
          [genres[0]],
          callback,
        );
      },
      function (callback) {
        const release = new Date(1970, 6, 15);
        albumCreate(
          'In the Wake of Poseidon',
          artists[0],
          release,
          '41:02',
          [genres[0]],
          callback,
        );
      },
      function (callback) {
        const release = new Date(1973, 3, 1);
        albumCreate(
          'The Dark Side of the Moon',
          artists[1],
          release,
          '42:32',
          [genres[0]],
          callback,
        );
      },
      function (callback) {
        const release = new Date(1973, 3, 1);
        albumCreate(
          'Animals',
          artists[1],
          release,
          '41:40',
          [genres[6]],
          callback,
        );
      },
      function (callback) {
        const release = new Date(1976, 4, 1);
        albumCreate(
          '2112',
          artists[2],
          release,
          '41:40',
          [genres[0]],
          callback,
        );
      },
      function (callback) {
        const release = new Date(2001, 5, 15);
        albumCreate(
          'Lateralus',
          artists[3],
          release,
          '78:51',
          [genres[5]],
          callback,
        );
      },
      function (callback) {
        const release = new Date(2019, 8, 30);
        albumCreate(
          'Fear Inoculum',
          artists[3],
          release,
          '86:38',
          [genres[5]],
          callback,
        );
      },
      function (callback) {
        const release = new Date(2010, 9, 18);
        albumCreate(
          'Opus Eponymous',
          artists[4],
          release,
          '34:41',
          [genres[4]],
          callback,
        );
      },
      function (callback) {
        const release = new Date(1992, 11, 3);
        albumCreate(
          'Rage Against the Machine',
          artists[5],
          release,
          '52:55',
          [genres[1]],
          callback,
        );
      },
      function (callback) {
        const release = new Date(1992, 11, 3);
        albumCreate(
          'Nursery Cryme',
          artists[6],
          release,
          '39:26',
          [genres[7]],
          callback,
        );
      },
    ],
    // Optional callback
    cb,
  );
}

async.series([
  createGenreArtists,
  createAlbums,
], (err) => {
  if (err) {
    console.log(`FINAL ERR: ${err}`);
  } else {
    console.log(`Albums: ${albums}`);
  }
  // All done, disconnect from database
  mongoose.connection.close();
});

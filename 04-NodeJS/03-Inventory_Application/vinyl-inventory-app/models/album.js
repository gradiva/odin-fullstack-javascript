const mongoose = require('mongoose');
const moment = require('moment');

const { Schema } = mongoose;

const AlbumSchema = new Schema(
  {
    title: { type: String, required: true },
    artist: { type: Schema.Types.ObjectId, ref: 'Artist', required: true },
    releaseDate: { type: Date, required: true },
    length: { type: String, required: true },
    genre: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
  },
);

// Virtual for Album's URL
AlbumSchema
  .virtual('url')
  .get(function () {
    return `/inventory/album/${this._id}`;
  });

AlbumSchema
  .virtual('releaseDateFormatted')
  .get(function () {
    return moment(this.releaseDate).format('MMMM Do, YYYY');
  });

// Export model
module.exports = mongoose.model('Album', AlbumSchema);

const mongoose = require('mongoose');
const moment = require('moment');

const { Schema } = mongoose;

const ArtistSchema = new Schema(
  {
    name: { type: String, required: true, max: 100 },
    country: { type: String, required: true, max: 100 },
    foundationDate: { type: Date, default: Date.now },
    dissolutionDate: { type: Date, default: Date.now },
  },
);

// // Virtual for Artist's lifespan
ArtistSchema
  .virtual('lifespan')
  .get(function () {
    let lifetimeString = '';
    if (this.foundationDate) {
      lifetimeString = moment(this.foundationDate).format('MMMM Do, YYYY');
    }
    lifetimeString += ' - ';
    if (this.dissolutionDate) {
      lifetimeString += moment(this.dissolutionDate).format('MMMM Do, YYYY');
    }
    return lifetimeString;
  });

// Virtual for Artist's URL
ArtistSchema
  .virtual('url')
  .get(function () {
    return `/inventory/artist/${this._id}`;
  });

// Export model
module.exports = mongoose.model('Artist', ArtistSchema);

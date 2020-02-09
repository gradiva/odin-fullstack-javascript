const mongoose = require('mongoose');
const moment = require('moment');

const { Schema } = mongoose;

const AuthorSchema = new Schema(
  {
    first_name: { type: String, required: true, max: 100 },
    family_name: { type: String, required: true, max: 100 },
    date_of_birth: { type: Date },
    date_of_death: { type: Date },
  },
);

// Virtual for author's full name
AuthorSchema
  .virtual('name')
  .get(function () {
    return `${this.family_name}, ${this.first_name}`;
  });

// Virtual for author's lifespan
AuthorSchema
  .virtual('lifespan')
  .get(function () {
    let lifetimeString = '';
    if (this.date_of_birth) {
      lifetimeString = moment(this.date_of_birth).format('MMMM Do, YYYY');
    }
    lifetimeString += ' - ';
    if (this.date_of_death) {
      lifetimeString += moment(this.date_of_death).format('MMMM Do, YYYY');
    }
    return lifetimeString;
  });
// Virtual for author's URL
AuthorSchema
  .virtual('url')
  .get(function () {
    return `/catalog/author/${this._id}`;
  });

AuthorSchema
  .virtual('date_of_birth_yyyy_mm_dd')
  .get(function () {
    return moment(this.date_of_birth).format('YYYY-MM-DD');
  });

AuthorSchema
  .virtual('date_of_death_yyyy_mm_dd')
  .get(function () {
    return moment(this.date_of_death).format('YYYY-MM-DD');
  });

// Export model
module.exports = mongoose.model('Author', AuthorSchema);

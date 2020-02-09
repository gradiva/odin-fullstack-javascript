const mongoose = require('mongoose');
const moment = require('moment');

const { Schema } = mongoose;

const MessageSchema = new Schema({
  title: {
    type: String, required: true, min: 2, max: 50,
  },
  timestamp: { type: Date, default: Date.now },
  text: {
    type: String, required: true, min: 30, max: 200,
  },
  author: { type: Schema.Types.ObjectId, ref: 'Author' },
});

// Virtual for Message's URL
MessageSchema
  .virtual('url')
  .get(function () {
    return `/message/${this._id}`;
  });

// Virtual for Timestamp
MessageSchema.virtual('timestamp_formatted').get(function () {
  return moment(this.timestamp).fromNow();
});

// Export module
module.exports = mongoose.model('Message', MessageSchema);

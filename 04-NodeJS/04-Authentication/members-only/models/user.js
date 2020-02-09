const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    firstName: {
      type: String, required: true, min: 2, max: 100,
    },
    lastName: {
      type: String, required: true, min: 2, max: 100,
    },
    username: {
      type: String, required: true, min: 2, max: 100,
    },
    password: {
      type: String, required: true, min: 8, max: 30,
    },
    isMember: { type: Boolean, default: false },

    isAdmin: { type: Boolean, default: false },
  },
);

// Virtual for User's full name
UserSchema
  .virtual('name')
  .get(function () {
    return `${this.lastName}, ${this.firstName}`;
  });

// Export model
module.exports = mongoose.model('User', UserSchema);

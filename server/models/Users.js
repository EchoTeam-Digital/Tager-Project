const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  password_two: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },

});

module.exports = User = mongoose.model('users', UserSchema);
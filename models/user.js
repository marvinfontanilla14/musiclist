const mongoose = require('mongoose');

// const { Schema } = mongoose.Schema;

const passportLocalMongoose = require('passport-local-mongoose');

const User = mongoose.Schema({
  username: String,
  password: { type: String, select: false },
  firstName: String,
  lastName: String,
  email: String,
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);

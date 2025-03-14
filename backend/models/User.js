const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.passwor);
};

module.exports = mongoose.model('User', userSchema);

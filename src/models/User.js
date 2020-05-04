const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  cpf: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
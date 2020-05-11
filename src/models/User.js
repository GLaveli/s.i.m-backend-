const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  cpf: String,
  email: String,
  password: String,
  tell1: String,
  tell2: String,
  street: String,
  city: String,
  number: String,
  uf: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  cpf: { type: String, select: false },
  email: String,
  password: { type: String, select: false },
  tell1: String,
  tell2: String,
  street: String,
  city: String,
  number: String,
  uf: String,
  flag: { type: Number, default: 0 }
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);
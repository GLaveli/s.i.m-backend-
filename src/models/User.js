const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nome: String,
  email: String,
  celular: String,
  telefone: String,
  cpf: String,
  cep: String,
  numero: String,
});

module.exports = mongoose.model('User', UserSchema);
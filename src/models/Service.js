const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  data: String,
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Service', ServiceSchema);
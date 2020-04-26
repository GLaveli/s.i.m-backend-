const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  discount: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
  }
});

module.exports = mongoose.model('Services', servicesSchema);
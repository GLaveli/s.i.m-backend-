const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  title: String,
  description: String,
  priceWithCable: Number,
  priceWithOutCable: Number,
  priceAboveThreeWithCable: Number,
  priceAboveThreeWithOutCable: Number,
  tags: [String],
}, {
  timestamps: true,
}
);

module.exports = mongoose.model('Service', ServiceSchema);
const mongoose = require('mongoose');

const SubServiceSchema = new mongoose.Schema({
  description: String,
  priceWithCable: Number,
  priceWithOutCable: Number,
  priceAboveThreeWithCable: Number,
  priceAboveThreeWithOutCable: Number,
  tags: [String],
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service'
  }
}, {
  timestamps: true,
}
);

module.exports = mongoose.model('SubService', SubServiceSchema);
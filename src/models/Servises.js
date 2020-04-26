const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
  serviceType: String,
  amount: Number,
  discount: Number,
  discountedAmount: Number,
  totalAmount: Number,
  description: String,
  name: String,
  cpf: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Services', servicesSchema);
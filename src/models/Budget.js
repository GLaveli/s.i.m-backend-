const mongoose = require('mongoose');

const Budget = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  view: Boolean,
  selected_itens: String,
  selectedItensObjct: Object,
  dataSave: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Budget', Budget);
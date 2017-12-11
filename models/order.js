const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId 

var orderSchema = new Schema({
  products: [{
    type: ObjectId,
    ref: "Product"
  }]
}, {
    timestamps: true
  });

module.exports = mongoose.model('Order', orderSchema);
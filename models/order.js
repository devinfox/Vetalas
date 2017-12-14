const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId 

var itemSchema = new Schema({
  qty: {type: Number, default: 1},
  product: {type: ObjectId, ref: 'Product'}
})

var orderSchema = new Schema({
  user: {type: ObjectId, ref: 'User'},
  products: [itemSchema],
  completed: {type: Boolean, default: false}
}, {
  timestamps: true
});

orderSchema.statics.getCart = function(userId, cb) {
  this.findOne({user: userId, completed: false}).then(cart => {
    if (cart) return cb(cart);
    var cart = new this({user: userId});
    cart.save().then(() => cb(cart));
  });
}

orderSchema.methods.addProduct = function(productId, cb) {
  var item = this.products.find(item => item.product.equals(productId));
  if (item) {
    item.qty++;
  } else {
    this.products.push({product: productId});
  }
  this.save().then(() => cb(this));
}

module.exports = mongoose.model('Order', orderSchema);
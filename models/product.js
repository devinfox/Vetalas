var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    image: String,
    name: String,
    price: Number,
    description: String,
    sku: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
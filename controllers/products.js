const Product = require('../models/product')

function index(req, res) {
  console.log(`productCtrler being hit`);
  Product.find({}).then((products)=> res.json(products));
}

module.exports = { index }
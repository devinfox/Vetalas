const Product = require('../models/product')

const index = (req, res) => {
  Product.find({}, function (error, products) {
    console.log('products', products)
    res.json(products)
  })
}

module.exports = {index}
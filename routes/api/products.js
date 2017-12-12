const express = require('express');
const router = express.Router();
const Product = require('../../models/product');
const productsCtrl = require('../../controllers/products');

router.get('/catalogue', productsCtrl.index);

// function index(req, res) {
//  Product.find({})
//  .then(items => {
//      console.log(items);
//      res.json(items);
//  })
// }


module.exports = router;
require('./../config/database');
const sample = require('./sample-data');
//import mongoose models
console.log(sample)
const Product = require('../models/product');

console.log(Product)

// destroy all data in database
const seeds = Product.remove({})

//repopulate
seeds.then(() => {
    return Product.create(sample)
})

.then((products) => {
    console.log(product);
    require('mongoose').connection.close();
    process.exit();
})

const express = require('express');
const router = express.Router();
const Product = require('../../models/product');
const productsCtrl = require('../../controllers/products');

router.get('/catalogue', productsCtrl.index);


router.route('/catalogue/:product_id')
.get((req, res) => {
    Product.findById(req.params.product_id, (err, product) => {
        if (err) {
            res.json({message: err, data: null})
        } else {
            res.json({ message: 'Retreived Product', data: product })
        }
    })
})



module.exports = router;
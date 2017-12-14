const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/orders');

router.get('/cart', ordersCtrl.getCart);
router.put('/addProduct/:productId', ordersCtrl.addProduct);


module.exports = router;
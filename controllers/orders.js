const Order = require('../models/order')

function getCart(req, res) {
    Order.getCart(req.user._id, function(cart) {
        res.json(cart);
    });
}

function addProduct(req, res) {
    Order.getCart(req.user._id, function(cart) {
        cart.addProduct(req.params.productId, function(cart) {
            res.json(cart);
        });
    });
}

module.exports = { 
    getCart, 
    addProduct 
};
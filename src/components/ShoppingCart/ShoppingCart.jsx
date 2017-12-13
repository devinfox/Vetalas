import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
    constructor(props){
        super(props),
        this.state = {
            products: [],
            total: null
        }
    }

    addProduct = (product) => {
        this.setState({products : product})
        this.countTotal();
    }
    removeItem = (e, productId) => {
        var productIndex;
        this.state.products.some(function(product, index) {
            if(product.id == productId) {
                productIndex = index;
                return true;
            }
        })
        if(typeof productId != 'undefined'){
            this.state.products.splice()
        }
    }
    countTotal = () => {
        var total = 0;
        this.state.products.forEach(function(product, index){
            total = total + product.price;
        })
        this.setState({total : total})
    }

    render() {
      listCart = () => {
          var products = this.state.products.map(function(product){
              return (
                <li key={product.id}>
                <span>{product.name}</span>
                <span>{product.price}</span>
                </li>
              )
          });
          var empty = <div>cart is empty</div>;
          return (

          )
      }
    };
    
}

export default ShoppingCart
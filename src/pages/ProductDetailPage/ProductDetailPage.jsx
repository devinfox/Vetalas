import React, { Component } from 'react';

class ProductDetailPage extends Component {
    constructor() {
        super()
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        console.log('mounted')
        this.getProduct();
    }

    getProduct() {
        fetch('api/products/catalogue' + this.state.id).then(product => this.setState({product: product}))
    }

    render() {
        if (this.state.product._id) {
            return (
                <div>
                    this is detail page
                </div>
            );
        } else {
            return (
                <div>
                    loading
                </div>
            );
        }
    }
}

export default ProductDetailPage;
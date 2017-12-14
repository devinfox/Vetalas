import React, { Component } from 'react';

class ProductDetailPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.product) {
            return (
                <div>
                    <img src={this.props.product.image}/>
                    {this.props.product.name}
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
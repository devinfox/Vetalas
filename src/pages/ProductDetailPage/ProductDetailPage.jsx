import React, { Component } from 'react';
import {Card, Col, Row} from 'react-materialize'
import './ProductDetailPage.css'

class ProductDetailPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.product) {
            return (
                <div className="flex">
                <Row>
                <Col m={4}>
                <Card>
                    <img className="size" src={this.props.product.image}/>
                    {this.props.product.name}
                    <button onClick={() => {this.props.shoppingCart.push(this.props.product); this.props.handleRenderCart()}} className="btn btn-success">Add to Cart</button>
                </Card>
                </Col>
                <div>
                {this.props.product.description}
                </div>
                </Row>
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


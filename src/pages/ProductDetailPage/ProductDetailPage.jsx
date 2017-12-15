import React, { Component } from 'react';
import {Card, Col, Row} from 'react-materialize'
import './ProductDetailPage.css';
import {Link} from 'react-router-dom'

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
                </Card>
                {this.props.user ? <button onClick={() => {this.props.shoppingCart.push(this.props.product); this.props.handleRenderCart()}} className="btn btn-success">Add to Cart</button> : <Link to="/login" className="btn btn-danger">Login</Link>}
                </Col>
                <div>
                {this.props.product.description}
                </div>
                <h2>
                    ${this.props.product.price}
                </h2>
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


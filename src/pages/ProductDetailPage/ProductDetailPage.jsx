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
                <Row>
                <Col m={4}></Col>
                <Col m={4}>
                <Card>
                    <img className="size" src={this.props.product.image}/>
                    {this.props.product.name}
                    <div>
                    {this.props.product.description}
                    </div>
                </Card>
                </Col>
                <Col m={4}></Col>
                </Row>
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


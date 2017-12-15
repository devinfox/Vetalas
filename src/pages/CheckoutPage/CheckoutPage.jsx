import React, {Component} from 'react';
import './CheckoutPage.css';
import {Link} from 'react-router-dom';
import {Col, Row, Table, Card} from 'react-materialize';


const CheckoutPage = (props) => {
        let dupArray = [];
        props.cart.forEach(function(product){
            if (!dupArray.includes(product)){
                dupArray.push(product);
            }
        });
        return(
            <div>
                <Table>
                    {dupArray.map(function(product, idx) {
                            return (
                                <Row>
                                <Col m={4}></Col>
                                <Col m={4}>
                                <tr key={idx}>
                                    <Row>
                                    <Col m={4}>
                                    <Card>
                                    <td className="cell">{product.name}</td>
                                    <td><img className="small-size" src={product.image}></img></td>
                                    <td className="cell">{props.getQuantity(props.cart, product)}</td>
                                    <td className="cell">{product.price}</td>
                                    <td className="cell">{product.price * props.getQuantity(props.cart, product)}</td>
                                    <button onClick={() => {props.delete(props.cart, product); props.handleRenderCart()}} className="btn btn-danger">Remove from Cart</button>
                                    </Card>
                                    </Col>
                                    </Row>
                                </tr>
                                </Col>
                            <Col m={4}></Col>
                                </Row>
                            )
                        }
                    )}
                    </Table> 
            </div>
        )
     

}

export default CheckoutPage;



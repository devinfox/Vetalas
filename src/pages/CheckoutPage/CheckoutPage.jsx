import React, {Component} from 'react';
import './CheckoutPage.css';
import {Link} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const CheckoutPage = (props) => {
        let dupArray = [];
        props.cart.forEach(function(product){
            if (!dupArray.includes(product)){
                dupArray.push(product);
            }
        });
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Computed Price</th>
                        </tr>
                    {dupArray.map(function(product, idx) {
                            return (
                                <tr key={idx}>
                                    <td className="cell">{product.name}</td>
                                    <td className="cell img"><img src={product.image}></img></td>
                                    <td className="cell">{props.getQuantity(props.cart, product)}</td>
                                    <td className="cell">{product.price}</td>
                                    <td className="cell">{product.price * props.getQuantity(props.cart, product)}</td>
                                </tr>
                            )
                        }
                    )}
                    </tbody>
                    </table> 
            </div>
        )
     

}

export default CheckoutPage;
            // <div className="Catalogue">
            //     <h1>Checkout</h1>
            //     <div className="Back">
            //         <Link to="/catalogue">Back to Catalogue</Link>
            //     </div>
            //     <BootstrapTable>
            //         <TableHeaderColumn dataField='id' isKey>Item</TableHeaderColumn>
            //         <TableHeaderColumn dataField='name'>Cost</TableHeaderColumn>
            //         <TableHeaderColumn dataField='price'>Qty.</TableHeaderColumn>
            //     </BootstrapTable>
            //     <div className="Purchase">
            //         <Link to="/confirmation">Purchase</Link>
            //     </div>
            // </div>
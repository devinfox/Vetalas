import React, {Component} from 'react';
import './CheckoutPage.css';
import {Link} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class CheckoutPage extends Component {

    render() {
        return (
            <div className="Catalogue">
                <h1>Checkout</h1>
                <div className="Back">
                    <Link to="/catalogue">Back to Catalogue</Link>
                </div>
                <BootstrapTable>
                    <TableHeaderColumn dataField='id' isKey>Item</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Cost</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'>Qty.</TableHeaderColumn>
                </BootstrapTable>
                <div className="Purchase">
                    <Link to="/confirmation">Purchase</Link>
                </div>
            </div>
        );
    }
}

export default CheckoutPage;
import React, {Component} from 'react';
import './CataloguePage.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class CataloguePage extends Component {

    render() {
        return (
            <div className="Catalogue">
                <h1>Catalogue</h1>

                <input placeholder="Search..."></input><br />
                <button type="submit">Submit</button>

                <BootstrapTable data={this.props.catalogue}>
                    <TableHeaderColumn dataField='_id' isKey>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default CataloguePage;
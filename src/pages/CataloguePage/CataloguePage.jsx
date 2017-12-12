import React, {Component} from 'react';
import './CataloguePage.css';

const CataloguePage = (props) => {
    return (
        <div>
            {props.products ?
                props.products.map((product, idx) => <p key={idx}>{product.name}</p>)
                    :
                    <h1>Loading...</h1>}
        </div>
    )
}

export default CataloguePage;
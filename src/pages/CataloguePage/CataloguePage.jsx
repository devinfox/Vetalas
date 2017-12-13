import React, {Component} from 'react';
import './CataloguePage.css';
// import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'
import {Link} from 'react-router-dom'

//make sure componeent can render when this.state.movies = []; aka before we make the api call for movies
//component did mount method
// call the getMovies() method within componentDidMount, which updates state with mock data from api|

const CataloguePage = (props) => {
    return (
        <div className="container">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 card-holder">
                <div className="row">
                    <div className="card" style={{width: '20rem'}}>
            {props.products ?
                props.products.map((product, idx) => <div className="card-block"> <img className="card-img-top" src={product.image} /> <p className="card-title" key={idx}>{product.name}</p> <p className="card-text">{product.description}</p><p className="card-text">${product.price}</p><Link to={`/products/${product._id}`}>Detail</Link></div>)
                    :
                    <h1>Loading...</h1>}
        </div>
            </div>
                </div>
                    </div>
    )
}

export default CataloguePage;


import React, {Component} from 'react';
import './CataloguePage.css';
// import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'
import {Link} from 'react-router-dom'; 
import {Row, Card, Col} from 'react-materialize';
import Center from 'react-center';
//make sure componeent can render when this.state.movies = []; aka before we make the api call for movies
//component did mount method
// call the getMovies() method within componentDidMount, which updates state with mock data from api|

const CataloguePage = (props) => {
    return (
        <div>
            {props.products ?
            //filter takes in a function and checks to see if product.product_type matches props.category, 
            //then .map method goes through each item in the array and changes it to however you want, //it changes depending on the function - for this instance
            // we are changing it to a list item where we list product.name
            <Row>
              {props.products.filter(product => product.product_type === props.category).map((product, idx) => 
                <Col m={4}>
                  <Card key={idx}>
                    <Link to={`/products/${product._id}`}>
                      <p class="product-name">{product.name}</p><img className="size" src={product.image}/>
                    </Link>
                    {product.description}
                    <Center>
                    {props.user ? <button class="button" onClick={() => {props.shoppingCart.push(product); props.handleRenderCart()}} className="btn btn-success">Add to Cart</button> : <Link to="/login" className="btn btn-danger">Login</Link>}
                    </Center>
                  </Card>
                </Col>)
                }
            </Row>
            : 
            <div>LOADING</div>
            }
        </div>
      )
}

export default CataloguePage;


const Products = (props) => {
    return (
      <div>
          {props.products ?
          //filter takes in a function and checks to see if product.product_type matches props.category, 
          //then .map method goes through each item in the array and changes it to however you want, //it changes depending on the function - for this instance
          // we are changing it to a list item where we list product.name
          <Row>
            {props.products.filter(product => product.product_type === props.category).map((product, pIdx) => 
              <Col m={4}>
                <Card key={pIdx}>
                  <Link to={`/products/${product.id}`}>
                    {product.name}<img src={product.image_link}/>
                  </Link>
                </Card>
              </Col>)
              }
          </Row>
          : 
          <div>LOADING</div>
          }
      </div>
    )
  }


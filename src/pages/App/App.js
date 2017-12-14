import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Home from './../Home/Home';
import CataloguePage from '../CataloguePage/CataloguePage';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import ProductDetailPage from '../ProductDetailPage/ProductDetailPage';
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';


class App extends Component {
  state = {};

  getCart() {
    if (!this.state.user) return Promise.resolve();
    return fetch('/api/orders/cart', {
      method: 'GET',
      headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }).then(res => res.json());
  }

  cartUpdated = (cart) => {
    this.setState({cart});
  }

 //handle cart
 handleAddToCart(selectedProduct) {
  let cartItems = this.state.cart;
  let existingProduct = cartItems.find(product => product.id === selectedProduct.id);
  if (existingProduct) {
    cartItems = cartItems.map(product => {
      if (product.id === selectedProduct.id) {
        product.qty += 1;
      }
      return product;
    });
  } else {
    const newProduct = Object.assign({}, selectedProduct, { qty: 1});
    cartItems = cartItems.concat([newProduct]);
  }
  this.setState({
    cart: cartItems,
  });
}

handleChangeQuantity(selectedProduct, qty) {
  const cartItems = cartItems.map(product => {
    if (product.id === selectedProduct.id) {
      product.qty = qty;
    }
    return product;
  }).filter(product => product.qty > 0);
  this.setState({
    cart: cartItems
  })
}

//handle login 
handleLogout = () => {
  userService.logout();
  this.setState({user: null});
}

handleSignup = () => {
  this.setState({user: userService.getUser()}, function() {
    this.getCart().then(cart => this.setState({cart}));
  });
}

handleLogin = () => {
  this.setState({user: userService.getUser()}, function() {
    this.getCart().then(cart => this.setState({cart}));
  });
}

//api fetch

componentDidMount() {
  let user = userService.getUser();
  this.setState({user}, function() {
    this.getCart().then(cart => this.setState({cart}));
  });
  fetch('api/products/catalogue')
    .then(res => res.json())
    .then(products => {
      this.setState({products})
  });
}

// rendering components & pages
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout}/>
            <Switch>
              <Route exact path='/' render={() => 
                <Home user={this.state.user} />
              }/>
              <Route exact path='/catalogue' render={() => 
                <CataloguePage
                  products={this.state.products}
                />
              }/>
              <Route exact path='/products/:id' render ={(props) => {
                let product = this.state.products.find(p => p._id === props.match.params.id);
                return <ProductDetailPage product={product} />
              }}
              />
              <Route exact path='/signup' render={(props) => <SignupPage {...props} handleSignup={this.handleSignup} /> } />
              <Route exact path='/login' render={(props) => <LoginPage {...props} handleLogin={this.handleLogin} /> } />
              <Route exact path='/checkout' render={() => 
                <CheckoutPage />
              }/>
              <Route exact path='/confirmation' render={() => 
                <ConfirmationPage />
              }/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
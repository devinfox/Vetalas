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
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';


class App extends Component {
  constructor() {
    super();
    this.state = {
      products: null,
    }
  }

  // componentDidMount() {
  //   fetch('/catalogue')
  //     .then((data) => data.json())
  //       .then((data) => {
  //         this.setState({products: data})
  //   })
  // }

  componentDidMount() {
    fetch('api/products/catalogue')
      .then((data) => data.json())
        .then((data) => {
          this.setState({products: data})
    })
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }
 
  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path='/' render={() => 
                <Home />
              }/>
              <Route exact path='/catalogue' render={() => 
                <CataloguePage
                  products={this.state.products}
                />
              }/>
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
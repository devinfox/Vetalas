import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import NavBar from './../../components/NavBar/NavBar';
import Home from './../Home/Home';
import CataloguePage from './../CataloguePage/CataloguePage';
import CheckoutPage from './../CheckoutPage/CheckoutPage';
import ConfirmationPage from './../ConfirmationPage/ConfirmationPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      catalog: null,
      cart: null,
      search: null
    }
  }

  handleSearch = () => {
    fetch('/api/products', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }).then(res => res.json()).then(response => console.log(response));
  }

  componentDidMount() {
    return this.handleSearch();
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
                  handleSearch={this.handleSearch}
                />
              }/>
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
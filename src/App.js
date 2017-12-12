import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CatalogComponent from './pages/CatalogComponent/CatalogComponent'
import CheckoutComponent from './pages/CheckoutComponent/CheckoutComponent'
import NavBar from './components/NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() =>
      <NavBar />
        }/>
      <Route />
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;

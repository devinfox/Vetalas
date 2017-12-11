import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CataloguePage from './pages/CataloguePage/CataloguePage'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'
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
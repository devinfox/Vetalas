import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-materialize';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
    <div className="navbar-fixed">
     <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">VETALA</a>
      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <span>WELCOME, {(props.user.name).toUpperCase()}</span>
      <ul className="right hide-on-med-and-down">
        <li><Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link></li>
        <li><Link to="/checkout" className='Cart'>🛍</Link></li>
      </ul>
      <ul className="side-nav" id="mobile-demo">
      <li><Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link></li>
      <li><img src="https://openclipart.org/image/2400px/svg_to_png/89305/mb-cart-64x64.png"/><Link to="/checkout" className='Cart'>🛍</Link></li>
      </ul>
    </div>
  </nav>
  </div>
      :
      <div className="navbar-fixed">
     <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">VETALA</a>
      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><Link to='/login' className='NavBar-link'>LOG IN</Link></li>
        <li><Link to='/signup' className='NavBar-link'>SIGN UP</Link></li>
      </ul>
    </div>
  </nav>
  </div>
    
    return (
      <div className='NavBar'>
        {nav}
      </div>
    );
  };

export default NavBar;


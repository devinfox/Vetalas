import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import {Button} from 'react-materialize';

const NavBar = (props) => {
    let nav = props.user ?
      <div>
        
        <Link to="/" className='Logo'>VETALA</Link>
        &nbsp;
        <div className="search">
        <input placeholder="Search..."></input>
        <Button>Submit</Button>
        </div>
        <span 
        className='NavBar-welcome'>WELCOME, {props.user.name}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
         <Link to="/checkout" className='Cart'>🛍</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h2>{props.cartLength ? <p>Cart: {props.cartLength} </p> : <p></p>}</h2>
          <p>
          </p>
      </div>
      :
      <div>
        <nav>
        <Link to="/" className='Logo'>VETALA</Link>
        <Link to='/login' className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
        </nav>
      </div>
  
    return (
      <div className='NavBar'>
        {nav}
      </div>
    );
  };

export default NavBar;
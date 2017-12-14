import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
      <div>
        
        <Link to="/" className='Logo'>VETALA</Link>
        &nbsp;
        <div className="search">
        <input placeholder="Search..."></input>
        <button type="submit">Submit</button>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span 
        className='NavBar-welcome'>WELCOME, {props.user.name}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h2>{props.cartLength ? <p>Cart: {props.cartLength} </p> : <p></p>}</h2>
         <Link to="/checkout" className='Cart'><span role="img">🛍</span></Link>
    
      </div>
      :
      <div>
        <nav id="navHeader">
        <Link to="/" className='Logo'>VETALA</Link>
        <Link to='/login' className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
        </nav>
      </div>
  
    return (
      <div className='NavBar-Background'>
      <div className='NavBar'>
        {nav}
      </div>
      </div>
    );
  };

export default NavBar;
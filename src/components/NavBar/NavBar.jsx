import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
      <div>
        <Link to="/" className='Logo'>VETALA</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <input placeholder="Search..."></input><br />
        <button type="submit">Submit</button>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span 
        className='NavBar-welcome'>WELCOME, {props.user.name}</span>
         <Link to="/checkout" className='Cart'><span role="img">🛍</span></Link>
      </div>
      :
      <div>
        <Link to="/" className='Logo'>VETALA</Link>
        <Link to='/login' className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
      </div>;
  
    return (
      <div className='NavBar'>
        {nav}
      </div>
    );
  };

export default NavBar;
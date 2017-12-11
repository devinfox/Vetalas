import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <nav>
                <Link to="/" className='Logo'>Vetala</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <input placeholder="Search..."></input><br />
                <button type="submit">Submit</button>
                <Link to="/checkout" className='Cart'><span role="img">🛒</span></Link>
            </nav>
        </div>
    );
}

export default NavBar;
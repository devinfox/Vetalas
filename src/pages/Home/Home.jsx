import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <div className="Home">
                <div className="image-holder">
             <img src="https://i.imgur.com/MVFNpZz.jpg"></img>
                </div>
            <Link to="/catalogue" className='NavBar-link'>
            <span className="catalogue">Shop Now</span></Link>
        </div>
    );
}

export default Home;
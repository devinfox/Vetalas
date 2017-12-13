import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <div className="Home">
             <img src="https://i.imgur.com/fVUSuIq.jpg"></img>
            <h1 className="h1">WELCOME</h1>   
            <h4 className="h4">SHOP VINTAGE ADIDAS TEE'S</h4>
            <Link to="/catalogue" className='NavBar-link'>
            <span className="catalogue">Shop Now</span></Link>
        </div>
    );
}

export default Home;
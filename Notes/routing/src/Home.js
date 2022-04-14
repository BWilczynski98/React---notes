import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <ul>
            <li><Link to="about">About</Link></li>
            <li><Link to="shop">Shop</Link></li>
        </ul>
    );
}

export default Home;
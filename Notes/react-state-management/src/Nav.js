import React, { useContext } from 'react';
import './Nav.css'
import { MovieContext } from './MovieContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)

    return (
        <>
            <div className="container-nav">
                <h3>Cinema</h3>
                <h3>Movies on the list: {movies.length}</h3>
            </div>
        </>
    );
}

export default Nav;
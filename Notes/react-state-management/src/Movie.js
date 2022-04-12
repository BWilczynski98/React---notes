import React from 'react';
import './Movie.css'

const Movie = ({ name, price }) => {
    return (
        <>
            <div className='container-movie'>
                <h3>{name}</h3>
                <p>{price}</p>
            </div>
        </>
    );
}

export default Movie;
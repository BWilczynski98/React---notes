import React, { useState, useContext } from 'react';
import './MovieList.css'
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <>
            <div className='container-movie-list'>
                {movies.map(movie =>
                    <Movie name={movie.name} price={movie.price} key={movie.id} />
                )}
            </div>
        </>
    );
}

export default MovieList;
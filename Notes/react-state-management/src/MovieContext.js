import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: Math.random()
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: Math.random()
        },
        {
            name: 'Inception',
            price: '$10',
            id: Math.random()
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};

// Nie używamy export default, ponieważ chcemy wyeksportować dwie osobne "rzeczy"
import React, { useState, useContext } from 'react';
import './AddMovie.css';
import { MovieContext } from './MovieContext';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (event) => {
        setName(event.target.value);
    };

    const updatePrice = (event) => {
        setPrice(event.target.value)
    };


    const addMovie = (event) => {
        event.preventDefault();
        setMovies(prevMovies => [...prevMovies, { name: name, price: price, id: Math.random() }])
    };

    return (
        <div className='container-add-movie'>
            <form onSubmit={addMovie} >
                <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={updateName} />
                <input
                    type='number'
                    name='price'
                    value={price}
                    onChange={updatePrice}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddMovie;
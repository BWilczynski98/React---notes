import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  const DUMMY_FILMS = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      description: 'This is the description of the movie',
      releaseDate: '2022-06-09',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      description: 'This is the description of the movie 2',
      releaseDate: '2022-06-09',
    },
  ]

  const fetchMoviesHandler = () => {
    fetch('https://swapi.dev/api/films')
      .then(response => { return response.json() })
      .then(data => {
        const transformedMovies = data.results.map(movieData => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            description: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies)
      })
  }

  return (
    <div className="App">
      <section className='section-btn'><button onClick={fetchMoviesHandler}>Fetch films</button></section>
      <section><MovieList movies={movies} /></section>
    </div>
  );
}

export default App;

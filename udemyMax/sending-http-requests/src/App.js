import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    // fetch('https://swapi.dev/api/films')
    //   .then(response => { return response.json() })
    //   .then(data => {
    //     const transformedMovies = data.results.map(movieData => {
    //       return {
    //         id: movieData.episode_id,
    //         title: movieData.title,
    //         description: movieData.opening_crawl,
    //         releaseDate: movieData.release_date,
    //       };
    //     });
    //     setMovies(transformedMovies)
    //   })

    setIsLoading(true);
    setError(null)
    try {
      const response = await fetch('https://react-test-e9c4d-default-rtdb.europe-west1.firebasedatabase.app/movies.json');

      if (!response.ok) {
        throw new Error('Something went wrong!')
      };

      const data = await response.json();

      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      };

      // const transformedMovies = data.results.map(movieData => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     description: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });
      setMovies(loadedMovies)
    } catch (error) {
      setError(error.message)
    };
    setIsLoading(false)
  });

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  const addMovieHandler = async (movie) => {
    const response = await fetch('https://react-test-e9c4d-default-rtdb.europe-west1.firebasedatabase.app/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-type': 'application/json',
      }
    });
    const data = await response.json();
    console.log(data);
  }

  const deleteMovie = (id) => {
    console.log('id is: ' + id);
    const newArray = movies.filter(movie => movie.id !== id)
    setMovies(newArray)
  }

  return (
    <div className="App">
      <section><AddMovie addMovieHandler={addMovieHandler} /></section>
      <section className='section-btn'><button onClick={fetchMoviesHandler}>Fetch films</button></section>
      <section>
        {!isLoading && movies.length > 0 && <MovieList movies={movies} deleteMovie={deleteMovie} />}
        {!isLoading && movies.length == 0 && !error && <p className='alert'>Found no movies</p>}
        {isLoading && <p className='alert'>Loading...</p>}
        {!isLoading && error && <p className='alert'>{error}</p>}
      </section>
    </div>
  );
}

export default App;

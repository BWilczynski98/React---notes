import './App.css';
import Nav from './Nav';
import MovieList from './MovieList';
import { MovieProvider } from './MovieContext'
import AddMovie from './AddMovie';

function App() {
  return (
    <>
      <MovieProvider>
        <Nav />
        <MovieList />
        <AddMovie />
      </MovieProvider>
    </>
  );
}

export default App;

// ? https://www.youtube.com/watch?v=35lXWvCuM8o&ab_channel=DevEd
import Movie from "./Movie";

const MovieList = ({ movies, deleteMovie }) => {
    return (
        <>
            <div>{movies.map(movie => <Movie title={movie.title} description={movie.description} releaseDate={movie.releaseDate} key={movie.id} id={movie.id} deleteMovie={deleteMovie} />)}</div>
        </>
    );
}

export default MovieList;

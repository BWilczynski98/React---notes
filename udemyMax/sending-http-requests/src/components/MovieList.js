import Movie from "./Movie";

const MovieList = ({ movies }) => {
    return (
        <>
            <div>{movies.map(movie => <Movie title={movie.title} description={movie.description} releaseDate={movie.releaseDate} key={movie.id} />)}</div>
        </>
    );
}

export default MovieList;

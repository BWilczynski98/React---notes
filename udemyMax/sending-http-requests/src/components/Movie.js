import styles from './Movie.module.css';

const Movie = ({ title, description, releaseDate }) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}><h3>{title}</h3></div>
                <div className={styles.description}><p>{description}</p></div>
                <div className={styles.date}><p>{releaseDate}</p></div>
            </div>
        </>
    );
}

export default Movie;
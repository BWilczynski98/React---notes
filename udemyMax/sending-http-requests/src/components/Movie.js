import styles from './Movie.module.css';

const Movie = ({ title, description, releaseDate }) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}><h2>{title}</h2></div>
                <div className={styles.description}><p>{description}</p></div>
                <div className={styles.date}><p><span className={styles['release-date']}>Release date:</span> {releaseDate}</p></div>
            </div>
        </>
    );
}

export default Movie;
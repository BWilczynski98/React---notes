import React, { useRef } from 'react';
import styles from './AddMovie.module.css';

const AddMovie = ({ addMovieHandler }) => {
    const titleRef = useRef('')
    const openingTextRef = useRef('')
    const releaseDateRef = useRef('')
    const addMovie = (event) => {
        event.preventDefault();
        const movie = {
            title: titleRef.current.value,
            openingText: openingTextRef.current.value,
            releaseDate: releaseDateRef.current.value,
        }
        addMovieHandler(movie)
    }

    return (
        <>
            <form onSubmit={addMovie}>
                <div className={styles.container}>

                    <div className={styles.input}>
                        <label>Title</label>
                        <input ref={titleRef} />
                    </div>
                    <div className={styles.input}>
                        <label>Opening Text</label>
                        <textarea ref={openingTextRef}></textarea>
                    </div>
                    <div className={styles.input}>
                        <label>Release Date</label>
                        <input ref={releaseDateRef} />
                    </div>
                    <div>
                        <button type='submit'>add movie</button>
                    </div>

                </div>
            </form>
        </>
    );
}

export default AddMovie;
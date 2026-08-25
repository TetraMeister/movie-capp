import PropTypes from 'prop-types';

import styles from './MovieDetails.module.css';

export const MovieDetails = ({ value }) => {
    const { Poster, Title, Runtime, Year, Genre, Plot, Director, imdbRating } = value;

    return (
        <article className={styles.details__container}>
            <div>
                <img src={Poster} />
            </div>
            <h1 className={styles.details__title}>{Title}</h1>
            <p className={styles.details__quickInfo}>
                {Year} | {Runtime} | {Genre}
            </p>
            <p className={styles.details__desc}>{Plot}</p>
            <footer className={styles.details__foot}>
                <p>
                    Director: <span>{Director}</span>
                </p>
                <p>Rating: {imdbRating}</p>
            </footer>
        </article>
    );
};

MovieDetails.propTypes = {
    value: PropTypes.object.isRequired,
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Runtime: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Genre: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired,
    Director: PropTypes.string.isRequired,
    imdbRating: PropTypes.string.isRequired,
};

export default MovieDetails;

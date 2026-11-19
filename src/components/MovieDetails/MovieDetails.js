import PropTypes from 'prop-types';

import { Poster } from '../Poster';

import styles from './MovieDetails.module.css';

const isAvailable = (value) => Boolean(value) && value !== 'N/A';

export const MovieDetails = ({ value }) => {
    const {
        Poster: posterUrl,
        Title,
        Runtime,
        Year,
        Genre,
        Plot,
        Director,
        Actors,
        imdbRating,
    } = value;

    const quickInfo = [Year, Runtime, Genre].filter(isAvailable).join(' | ');

    return (
        <article className={styles.details__container}>
            <Poster src={posterUrl} title={Title} className={styles.details__poster} />
            <div className={styles.details__info}>
                <h1 className={styles.details__title}>{Title}</h1>
                {quickInfo && <p className={styles.details__quickInfo}>{quickInfo}</p>}
                {isAvailable(imdbRating) && (
                    <p className={styles.details__rating} aria-label="IMDb rating">
                        ★ {imdbRating}
                        <span>/10</span>
                    </p>
                )}
                {isAvailable(Plot) && <p className={styles.details__desc}>{Plot}</p>}
                <dl className={styles.details__foot}>
                    {isAvailable(Director) && (
                        <div>
                            <dt>Director</dt>
                            <dd>{Director}</dd>
                        </div>
                    )}
                    {isAvailable(Actors) && (
                        <div>
                            <dt>Cast</dt>
                            <dd>{Actors}</dd>
                        </div>
                    )}
                </dl>
            </div>
        </article>
    );
};

MovieDetails.propTypes = {
    value: PropTypes.shape({
        Poster: PropTypes.string,
        Title: PropTypes.string.isRequired,
        Runtime: PropTypes.string,
        Year: PropTypes.string,
        Genre: PropTypes.string,
        Plot: PropTypes.string,
        Director: PropTypes.string,
        Actors: PropTypes.string,
        imdbRating: PropTypes.string,
    }).isRequired,
};

export default MovieDetails;

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Poster } from '../Poster';

import styles from './MovieCard.module.css';

export const MovieCard = ({ movie }) => {
    const { imdbID, Title, Year, Poster: posterUrl } = movie;

    return (
        <li className={styles.card}>
            <Link to={`/movies/${imdbID}`} className={styles.card__link}>
                <Poster src={posterUrl} title={Title} className={styles.card__poster} />
                <div className={styles.card__body}>
                    <h2 className={styles.card__title}>{Title}</h2>
                    <p className={styles.card__year}>{Year}</p>
                </div>
            </Link>
        </li>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        imdbID: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Year: PropTypes.string,
        Poster: PropTypes.string,
    }).isRequired,
};

export default MovieCard;

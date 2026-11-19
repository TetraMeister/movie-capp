import React from 'react';

import { useParams } from 'react-router-dom';

import { useAsyncFn } from 'react-use';

import { getMovies as getMoviesApiRequest } from '../api/getMovies';

import { MovieCard } from '../components/MovieCard';

import styles from './Pages.module.css';

export const PageMoviesSearchResult = () => {
    const { searchPhrase } = useParams();

    const [getMoviesState, getMovies] = useAsyncFn(getMoviesApiRequest, [], { loading: true });

    React.useEffect(() => {
        if (searchPhrase) {
            getMovies(searchPhrase);
        }
    }, [getMovies, searchPhrase]);

    const { loading, error, value } = getMoviesState;

    if (loading) return <p className="status">Loading...</p>;

    if (error) return <p className="status status--error">ERROR: {error.message}</p>;

    if (!value || value.length === 0) {
        return <p className="status">No movies found for &quot;{searchPhrase}&quot;.</p>;
    }

    return (
        <ul className={styles.results}>
            {value.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </ul>
    );
};

export default PageMoviesSearchResult;

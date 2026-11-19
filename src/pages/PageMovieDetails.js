import React from 'react';

import { useAsyncFn } from 'react-use';

import { getMovieById as getMovieApiCall } from '../api/getMovieById';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { MovieDetails } from '../components/MovieDetails';

import styles from './Pages.module.css';

export const PageMovieDetails = () => {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [getMovieByIdState, getMovieById] = useAsyncFn(getMovieApiCall);

    React.useEffect(() => {
        getMovieById(movieId);
    }, [getMovieById, movieId]);

    const goBack = () => {
        if (location.key === 'default') {
            navigate('/movies/search');
        } else {
            navigate(-1);
        }
    };

    return (
        <div className="container">
            <button type="button" className={`btn btn--ghost ${styles.backBtn}`} onClick={goBack}>
                ← Back
            </button>
            {getMovieByIdState.loading && <p className="status">Loading...</p>}
            {!getMovieByIdState.loading && getMovieByIdState.error && (
                <p className="status status--error">ERROR: {getMovieByIdState.error.message}</p>
            )}
            {!getMovieByIdState.loading && getMovieByIdState.value && (
                <MovieDetails value={getMovieByIdState.value} />
            )}
        </div>
    );
};

export default PageMovieDetails;

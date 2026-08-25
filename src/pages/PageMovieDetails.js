import React from 'react';

import { useAsyncFn } from 'react-use';

import { getMovieById as getMovieApiCall } from '../api/getMovieById';

import { useParams } from 'react-router-dom';

import { MovieDetails } from '../components/MovieDetails';

export const PageMovieDetails = () => {
    const { movieId } = useParams();

    const [getMovieByIdState, getMovieById] = useAsyncFn(getMovieApiCall);

    React.useEffect(() => {
        getMovieById(movieId);
    }, [getMovieById, movieId]);

    return (
        <>
            {getMovieByIdState.value &&
                !getMovieByIdState.loading &&
                !getMovieByIdState.value?.Error && <MovieDetails value={getMovieByIdState.value} />}
            {!getMovieByIdState.value && !getMovieByIdState.loading && !getMovieByIdState.error && (
                <p>No data available.</p>
            )}
            {getMovieByIdState.value?.Error &&
                !getMovieByIdState.loading &&
                !getMovieByIdState.error && <p>{getMovieByIdState.value.Error}</p>}
            {getMovieByIdState.error && <p>Error occurred</p>}
            {getMovieByIdState.loading && <p>Loading...</p>}
        </>
    );
};

export default PageMovieDetails;

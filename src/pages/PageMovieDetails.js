import React from 'react';

import { useAsyncFn } from 'react-use';

import { getMovieById as getMovieApiCall } from '../api/getMovieById';

import { useParams } from 'react-router-dom';

export const PageMovieDetails = () => {
    const { movieId } = useParams();

    const [getMovieByIdState, getMovieById] = useAsyncFn(getMovieApiCall);

    React.useEffect(() => {
        getMovieById(movieId);
    }, [getMovieById, movieId]);

    const Details = () => (
        <article>
            <div>
                <img src={getMovieByIdState.value.Poster} />
            </div>
            <h1>{getMovieByIdState.value.Title}</h1>
            <p>
                {getMovieByIdState.value.Year} | {getMovieByIdState.value.Runtime} |{' '}
                {getMovieByIdState.value.Genre}
            </p>
            <p>{getMovieByIdState.value.Plot}</p>
            <footer>
                <p>
                    Director: <span>{getMovieByIdState.value.Director}</span>
                </p>
                <p>Rating: {getMovieByIdState.value.imdbRating}</p>
            </footer>
        </article>
    );

    return (
        <>
            {getMovieByIdState.value &&
                !getMovieByIdState.loading &&
                !getMovieByIdState.value?.Error && <Details />}
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

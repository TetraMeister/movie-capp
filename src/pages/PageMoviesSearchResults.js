import React from 'react';

import { NavLink } from 'react-router-dom';

import { useParams } from 'react-router-dom';

import { useAsyncFn } from 'react-use';

import { getMovies as getMoviesApiRequest } from '../api/getMovies';

export const PageMoviesSearchResult = () => {
    const { searchPhrase } = useParams();

    const [getMoviesState, getMovies] = useAsyncFn(getMoviesApiRequest);

    React.useEffect(() => {
        if (searchPhrase) {
            getMovies(searchPhrase);
        }
    }, [searchPhrase]);

    return (
        <div>
            {getMoviesState.loading && <p>Loading...</p>}
            {getMoviesState.error && <p>ERROR: {getMoviesState.error.message}</p>}
            {getMoviesState.value && !getMoviesState.loading ? (
                <ul>
                    {getMoviesState.value.map((movie) => {
                        return (
                            <li key={movie.imdbID}>
                                <NavLink to={`/movies/${movie.imdbID}`}>
                                    {movie.Year} | {movie.Title}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                !getMoviesState.loading && <p>No data available.</p>
            )}
        </div>
    );
};

export default PageMoviesSearchResult;

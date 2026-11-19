import { fetchFromApi } from './config';

export const getMovieById = (movieId) => {
    return fetchFromApi({ i: movieId, plot: 'full' });
};

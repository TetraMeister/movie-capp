import { fetchFromApi } from './config';

export const getMovies = async (searchPhrase) => {
    try {
        const data = await fetchFromApi({ type: 'movie', s: searchPhrase });
        const uniqueMovies = new Map(data.Search.map((movie) => [movie.imdbID, movie]));
        return [...uniqueMovies.values()];
    } catch (error) {
        if (error.message === 'Movie not found!') return [];
        throw error;
    }
};

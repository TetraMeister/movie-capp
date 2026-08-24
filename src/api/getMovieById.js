const API_KEY = process.env.REACT_APP_API_KEY;

//http://www.omdbapi.com/?apikey=80b723e6&type=movie&s=

export const getMovieById = (searchId) => {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&type=movie&i=${searchId}`).then(
        (resp) => resp.json()
    );
};

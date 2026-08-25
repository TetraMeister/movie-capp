import PropTypes from 'prop-types';

export const MovieDetails = ({ value }) => {
    const { Poster, Title, Runtime, Year, Genre, Plot, Director, imdbRating } = value;

    return (
        <article className="details__container">
            <div className="details__img-container">
                <img className="details__img" src={Poster} />
            </div>
            <h1 className="details__title">{Title}</h1>
            <p className="details__quick-info">
                {Year} | {Runtime} | {Genre}
            </p>
            <p className="details__desc">{Plot}</p>
            <footer className="details__foot">
                <p className="details__director">
                    Director: <span>{Director}</span>
                </p>
                <p className="details__rating">Rating: {imdbRating}</p>
            </footer>
        </article>
    );
};

MovieDetails.propTypes = {
    value: PropTypes.object.isRequired,
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Runtime: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Genre: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired,
    Director: PropTypes.string.isRequired,
    imdbRating: PropTypes.string.isRequired,
};

export default MovieDetails;

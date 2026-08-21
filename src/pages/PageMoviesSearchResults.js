import { useParams } from 'react-router-dom';

export const PageMoviesSearchResult = () => {
    const { searchPhrase } = useParams();

    return <div>PageMoviesSearchResult: {searchPhrase}</div>;
};

export default PageMoviesSearchResult;

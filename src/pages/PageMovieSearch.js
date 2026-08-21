import { useParams, useNavigate } from 'react-router-dom';

export const PageMovieSearch = () => {
    const navigate = useNavigate();
    const { searchPhrase } = useParams();

    return (
        <div>
            PageMovieSearch
            <input
                value={searchPhrase || ''}
                onChange={(e) => navigate(e.target.value.replaceAll('/', ''))}
            />
        </div>
    );
};

export default PageMovieSearch;

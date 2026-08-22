import { useParams, useNavigate, Outlet } from 'react-router-dom';

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
            <Outlet />
        </div>
    );
};

export default PageMovieSearch;

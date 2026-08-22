import React from 'react';

import { useDebounce } from 'react-use';

import { useParams, useNavigate, Outlet } from 'react-router-dom';

export const PageMovieSearch = () => {
    const navigate = useNavigate();
    const { searchPhrase } = useParams();

    const [tempSearchPhrase, setTempSearchPhrase] = React.useState(searchPhrase || '');

    const [, cancel] = useDebounce(
        () => {
            if (tempSearchPhrase !== searchPhrase) navigate(tempSearchPhrase);
        },
        1000,
        [tempSearchPhrase]
    );

    React.useEffect(() => {
        return () => cancel();
    }, [cancel]);

    return (
        <div>
            PageMovieSearch
            <input
                value={tempSearchPhrase}
                onChange={(e) => setTempSearchPhrase(e.target.value.replaceAll('/', ''))}
            />
            <Outlet />
        </div>
    );
};

export default PageMovieSearch;

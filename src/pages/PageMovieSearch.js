import React from 'react';

import { useDebounce } from 'react-use';

import { useParams, useNavigate, Outlet } from 'react-router-dom';

import styles from './Pages.module.css';

export const PageMovieSearch = () => {
    const navigate = useNavigate();
    const { searchPhrase = '' } = useParams();

    const [tempSearchPhrase, setTempSearchPhrase] = React.useState(searchPhrase);

    React.useEffect(() => {
        setTempSearchPhrase(searchPhrase);
    }, [searchPhrase]);

    const [, cancel] = useDebounce(
        () => {
            if (tempSearchPhrase !== searchPhrase) navigate(encodeURIComponent(tempSearchPhrase));
        },
        1000,
        [tempSearchPhrase]
    );

    React.useEffect(() => {
        return () => cancel();
    }, [cancel]);

    return (
        <div className="container">
            <h1 className={styles.search__title}>Search movies</h1>
            <input
                className={`input ${styles.search__input}`}
                type="search"
                aria-label="Movie title"
                placeholder="Type a movie title, e.g. Matrix"
                value={tempSearchPhrase}
                onChange={(e) => setTempSearchPhrase(e.target.value.replaceAll('/', ''))}
                autoFocus
            />
            <Outlet />
        </div>
    );
};

export default PageMovieSearch;

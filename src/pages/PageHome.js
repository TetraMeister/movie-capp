import { Link } from 'react-router-dom';

import { useUser } from '../contexts/UserContext';

import styles from './Pages.module.css';

export const PageHome = () => {
    const { userName } = useUser();

    return (
        <section className={`container ${styles.hero}`}>
            <h1 className={styles.hero__title}>
                Welcome, <span>{userName}</span>!
            </h1>
            <p className={styles.hero__lead}>
                Movie Capp lets you search thousands of movies and check their plot, cast, runtime
                and IMDb rating in one place.
            </p>
            <Link to={'/movies/search'} className="btn">
                Search movies
            </Link>
        </section>
    );
};

export default PageHome;

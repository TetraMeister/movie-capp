import './App.module.css';

import PageHome from '../pages/PageHome';
import PageMovieSearch from '../pages/PageMovieSearch';
import PageMoviesSearchResults from '../pages/PageMoviesSearchResults';
import PageLogin from '../pages/PageLogin';
import PageMovieDetails from '../pages/PageMovieDetails';
import PageLogout from '../pages/PageLogout';
import Page404 from '../pages/Page404';

import { Route, Routes } from 'react-router-dom';

import { NavLink } from './NavLink';
import { NavBar } from './NavBar/NavBar';
import { useUser } from '../contexts/UserContext';

export const App = () => {
    const { isUserLoggedIn } = useUser();

    return (
        <div>
            {isUserLoggedIn ? (
                <NavBar>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/movies/search'}>Movies Search</NavLink>
                    <NavLink to={'/logout'}>Log Out</NavLink>
                </NavBar>
            ) : null}

            <Routes>
                {isUserLoggedIn ? (
                    <>
                        <Route element={<Page404 />} path="*" />
                        <Route element={<PageHome />} path="/" />
                        <Route element={<PageMovieSearch />} path="/movies/search">
                            <Route
                                index={true}
                                element={<p>Start typing to search our movies database...</p>}
                            />
                            <Route element={<PageMoviesSearchResults />} path=":searchPhrase" />
                        </Route>
                        <Route element={<PageMovieDetails />} path="/movies/:movieId" />
                        <Route element={<PageLogout />} path="/logout" />
                    </>
                ) : (
                    <Route element={<PageLogin />} path="*" />
                )}
            </Routes>
        </div>
    );
};

export default App;

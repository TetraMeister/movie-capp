import './App.module.css';

import PageHome from '../pages/PageHome';
import PageMovieSearch from '../pages/PageMovieSearch';
import PageMoviesSearchResults from '../pages/PageMoviesSearchResults';
import PageLogin from '../pages/PageLogin';
import PageLogout from '../pages/PageLogout';

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
                <Route element={<PageLogout />} path="/logout" />
                {isUserLoggedIn ? (
                    <>
                        <Route element={<PageHome />} path="/" />
                        <Route element={<PageMovieSearch />} path="/movies/search">
                            <Route element={<PageMoviesSearchResults />} path=":searchPhrase" />
                        </Route>
                    </>
                ) : (
                    <Route element={<PageLogin />} path="/" />
                )}
            </Routes>
        </div>
    );
};

export default App;

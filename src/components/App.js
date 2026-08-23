import './App.module.css';

import React from 'react';

import PageHome from '../pages/PageHome';
import PageMovieSearch from '../pages/PageMovieSearch';
import PageMoviesSearchResults from '../pages/PageMoviesSearchResults';
import PageLogin from '../pages/PageLogin';
import PageLogout from '../pages/PageLogout';

import { Route, Routes } from 'react-router-dom';

import { NavLink } from './NavLink';
import { NavBar } from './NavBar/NavBar';

export const App = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(
        localStorage.getItem('isUserLoggedIn') === true
    );

    const logOut = React.useCallback(() => {
        setIsUserLoggedIn(false);
    }, []);

    const logIn = React.useCallback(() => {
        setIsUserLoggedIn(true);
    }, []);

    React.useEffect(() => {
        if (isUserLoggedIn) {
            localStorage.setItem('isUserLoggedIn', 'true');
        } else {
            localStorage.removeItem('isUserLoggedIn');
        }
    }, [isUserLoggedIn]);

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
                <Route element={<PageLogout onLogOut={logOut} />} path="/logout" />
                {isUserLoggedIn ? (
                    <>
                        <Route element={<PageHome />} path="/" />
                        <Route element={<PageMovieSearch />} path="/movies/search">
                            <Route element={<PageMoviesSearchResults />} path=":searchPhrase" />
                        </Route>
                    </>
                ) : (
                    <Route element={<PageLogin logIn={logIn} />} path="/" />
                )}
            </Routes>
        </div>
    );
};

export default App;

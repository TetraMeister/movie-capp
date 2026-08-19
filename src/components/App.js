import './App.module.css';

import PageHome from '../pages/PageHome';
import PageMovieSearch from '../pages/PageMovieSearch';

import { Route, Routes } from 'react-router-dom';

import NavLink from './NavLink';
import { NavBar } from './NavBar/NavBar';

export const App = () => {
    return (
        <div>
            <NavBar>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/movies/search'}>Movies Search</NavLink>
            </NavBar>

            <Routes>
                <Route element={<PageHome />} path="/" />
                <Route element={<PageMovieSearch />} path="/movies/search" />
            </Routes>
        </div>
    );
};

export default App;

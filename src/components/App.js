import PageHome from '../pages/PageHome';
import PageMovieSearch from '../pages/PageMovieSearch';

import { Route, Routes } from 'react-router-dom';

import NavLink from './NavLink';

export const App = () => {
    return (
        <div>
            <nav>
                <ul>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/movies/search'}>Movies Search</NavLink>
                </ul>
            </nav>
            <Routes>
                <Route element={<PageHome />} path="/" />
                <Route element={<PageMovieSearch />} path="/movies/search" />
            </Routes>
        </div>
    );
};

export default App;

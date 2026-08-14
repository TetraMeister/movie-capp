import PageHome from '../pages/PageHome';
import PageMovieSearch from '../pages/PageMovieSearch';

import { Route, Routes, NavLink } from 'react-router-dom';

export const App = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to={'/'}
                            style={({ isActive }) => ({ fontWeight: isActive ? 700 : 400 })}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/movies/search'}
                            style={({ isActive }) => ({ fontWeight: isActive ? 700 : 400 })}
                        >
                            Movies Search
                        </NavLink>
                    </li>
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

import PageHome from '../pages/PageHome';
import PageMovieSearch from '../pages/PageMovieSearch';

import { Route, Routes, Link } from 'react-router-dom';

export const App = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies/search">Movies Search</Link>
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

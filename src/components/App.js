import PageHome from '../pages/PageHome';
import PageMovieSearch from '../pages/PageMovieSearch';

import { Route, Routes } from 'react-router-dom';

export const App = () => {
    return (
        <div>
            <Routes>
                <Route element={<PageHome />} path="/" />
                <Route element={<PageMovieSearch />} path="/movies/search" />
            </Routes>
        </div>
    );
};

export default App;

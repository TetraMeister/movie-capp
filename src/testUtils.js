import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './components/App';
import UserContextProvider from './contexts/UserContext';

export const renderApp = (route = '/') =>
    render(
        <UserContextProvider>
            <MemoryRouter initialEntries={[route]}>
                <App />
            </MemoryRouter>
        </UserContextProvider>
    );

export const mockFetchResponse = (data) =>
    Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve(data) });

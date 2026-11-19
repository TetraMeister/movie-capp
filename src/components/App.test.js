import { screen, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderApp, mockFetchResponse } from '../testUtils';

const matrix = {
    Title: 'The Matrix',
    Year: '1999',
    imdbID: 'tt0133093',
    Type: 'movie',
    Poster: 'N/A',
};

beforeEach(() => {
    localStorage.clear();
    global.fetch = jest.fn();
});

afterEach(() => {
    jest.useRealTimers();
});

describe('authentication', () => {
    test('shows login page and logs user in', () => {
        renderApp();

        const button = screen.getByRole('button', { name: /log in/i });
        expect(button).toBeDisabled();

        userEvent.type(screen.getByLabelText(/your name/i), 'John');
        userEvent.click(button);

        expect(screen.getByRole('heading', { name: /welcome, john/i })).toBeInTheDocument();
        expect(localStorage.getItem('userName')).toBe('John');
    });

    test('logs user out', () => {
        localStorage.setItem('userName', 'John');
        renderApp();

        userEvent.click(screen.getByRole('link', { name: /log out/i }));

        expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
        expect(localStorage.getItem('userName')).toBeNull();
    });
});

describe('movies search', () => {
    beforeEach(() => {
        localStorage.setItem('userName', 'John');
    });

    test('searches movies after typing and shows results', async () => {
        jest.useFakeTimers();
        global.fetch.mockReturnValue(
            mockFetchResponse({ Search: [matrix, matrix], Response: 'True' })
        );
        renderApp('/movies/search');

        fireEvent.change(screen.getByRole('searchbox', { name: /movie title/i }), {
            target: { value: 'matrix' },
        });
        act(() => {
            jest.advanceTimersByTime(1000);
        });

        expect(await screen.findByRole('link', { name: /the matrix/i })).toHaveAttribute(
            'href',
            '/movies/tt0133093'
        );
        expect(screen.getAllByRole('link', { name: /the matrix/i })).toHaveLength(1);
        expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('s=matrix'));
    });

    test('shows message when nothing was found', async () => {
        global.fetch.mockReturnValue(
            mockFetchResponse({ Response: 'False', Error: 'Movie not found!' })
        );
        renderApp('/movies/search/zzzz');

        expect(await screen.findByText(/no movies found for "zzzz"/i)).toBeInTheDocument();
    });

    test('shows API error', async () => {
        global.fetch.mockReturnValue(
            mockFetchResponse({ Response: 'False', Error: 'Too many results.' })
        );
        renderApp('/movies/search/a');

        expect(await screen.findByText(/too many results/i)).toBeInTheDocument();
    });
});

describe('movie details', () => {
    beforeEach(() => {
        localStorage.setItem('userName', 'John');
    });

    test('shows movie details', async () => {
        global.fetch.mockReturnValue(
            mockFetchResponse({
                ...matrix,
                Runtime: '136 min',
                Genre: 'Action, Sci-Fi',
                Plot: 'A computer hacker learns the truth.',
                Director: 'Lana Wachowski, Lilly Wachowski',
                Actors: 'Keanu Reeves',
                imdbRating: '8.7',
                Response: 'True',
            })
        );
        renderApp('/movies/tt0133093');

        expect(await screen.findByRole('heading', { name: 'The Matrix' })).toBeInTheDocument();
        expect(screen.getByText('1999 | 136 min | Action, Sci-Fi')).toBeInTheDocument();
        expect(screen.getByText('Keanu Reeves')).toBeInTheDocument();
        expect(screen.getByRole('img', { name: 'The Matrix' })).toHaveTextContent('No poster');
        expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('i=tt0133093'));
    });

    test('shows error for unknown id', async () => {
        global.fetch.mockReturnValue(
            mockFetchResponse({ Response: 'False', Error: 'Incorrect IMDb ID.' })
        );
        renderApp('/movies/xyz');

        expect(await screen.findByText(/incorrect imdb id/i)).toBeInTheDocument();
    });
});

test('shows 404 page for unknown route', () => {
    localStorage.setItem('userName', 'John');
    renderApp('/unknown/route/here');

    expect(screen.getByText(/nothing here/i)).toBeInTheDocument();
});

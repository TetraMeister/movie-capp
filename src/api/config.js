export const API_URL = 'https://www.omdbapi.com/';
export const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchFromApi = async (params) => {
    const query = new URLSearchParams({ apikey: API_KEY, ...params });
    const resp = await fetch(`${API_URL}?${query}`);

    if (!resp.ok) {
        throw new Error(`Request failed with status ${resp.status}`);
    }

    const data = await resp.json();

    if (data.Response === 'False') {
        throw new Error(data.Error || 'Unknown error');
    }

    return data;
};

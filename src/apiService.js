import axios from 'axios';
export const BASE_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = 'e146a7a5146c0f8a3c3cd99167c5b659';

export const getTrendingMovies = async () => {
  try {
    const resp = await axios.get(`${BASE_URL}trending/movie/day?`, {
      params: {
        api_key: API_KEY,
        page: 1,
      },
    });

    if (!resp) {
      throw new Error();
    }
    return resp.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getMoviesSearchQuery = async query => {
  try {
    const resp = await axios.get(`${BASE_URL}search/movie?`, {
      params: {
        api_key: API_KEY,
        language: 'en-uk',
        query: `${query}`,
        page: 1,
        include_adult: false,
      },
    });

    if (!resp) {
      throw new Error();
    }
    return resp.data.results;
  } catch (error) {
    console.error(error);
  }
};

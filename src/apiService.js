import axios from 'axios';
import toast from 'react-hot-toast';
export const BASE_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = 'e146a7a5146c0f8a3c3cd99167c5b659';
export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';

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
    toast.error("We're sorry, something's wrong. Please try again later!");
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
    toast.error("We're sorry, something's wrong. Please try again later!");
  }
};

export const getMoviesDetails = async movieId => {
  try {
    const resp = await axios.get(`${BASE_URL}/movie/${movieId}?`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    console.log(resp.data);
    if (!resp) {
      throw new Error();
    }
    return resp.data;
  } catch (error) {
    console.error(error);
    toast.error("We're sorry, something's wrong. Please try again later!");
  }
};

export const getMoviesCast = async movieId => {
  try {
    const resp = await axios.get(`${BASE_URL}/movie/${movieId}/credits?`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });

    if (!resp) {
      throw new Error();
    }
    return resp.data.cast;
  } catch (error) {
    console.error(error);
    toast.error("We're sorry, something's wrong. Please try again later!");
  }
};

export const getMoviesReviews = async movieId => {
  try {
    const resp = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?`, {
      params: {
        language: 'en-US',
        api_key: API_KEY,
      },
    });

    if (!resp) {
      throw new Error();
    }
    return resp.data.results;
  } catch (error) {
    console.error(error);
    toast.error("We're sorry, something's wrong. Please try again later!");
  }
};

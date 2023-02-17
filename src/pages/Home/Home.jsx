import { getTrendingMovies } from 'apiService';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

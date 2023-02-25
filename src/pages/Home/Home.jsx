import { getTrendingMovies } from 'apiService';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);
  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;

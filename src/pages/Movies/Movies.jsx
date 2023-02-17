import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesSearchQuery } from 'apiService';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState([]);
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    getMoviesSearchQuery(searchQuery).then(setMoviesList);
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query });
  };

  const handleChange = eve => {
    setQuery(eve.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={moviesList} />
    </>
  );
};

import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesSearchQuery } from 'apiService';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { FcSearch } from 'react-icons/fc';
import {
  SearchbarForm,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Movies.styled';
import toast, { Toaster } from 'react-hot-toast';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (!searchQuery) {
      return;
    }

    getMoviesSearchQuery(searchQuery)
      .then(setMoviesList)
      .finally(() => {
        setLoading(false);
        setQuery(searchQuery);
      });
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) {
      toast.error(
        'Sorry, there are no images matching your search query. Please enter something!',
        {
          duration: 4000,
        }
      );
      return;
    }
    setLoading(true);
    setSearchParams({ query });
  };

  const handleChange = eve => {
    setQuery(eve.target.value);
  };
  return (
    <>
      <SearchbarForm>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormInput
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search..."
            value={query}
            onChange={handleChange}
          />
          <SearchFormBtn type="submit">
            <FcSearch size={40} />
          </SearchFormBtn>
        </SearchForm>
      </SearchbarForm>
      {isLoading && <Loader />}
      <MoviesList movies={moviesList} />
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
};

export default Movies;

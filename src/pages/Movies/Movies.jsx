import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesSearchQuery } from 'apiService';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { FcSearch } from 'react-icons/fc';
import { SearchForm, SearchFormBtn, SearchFormBtnlLabel, SearchFormInput } from './Movies.styled';

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
    getMoviesSearchQuery(searchQuery).then(setMoviesList).finally(()=> {
      setLoading(false);
      setQuery(searchQuery)});
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    setSearchParams({ query });
  };

  const handleChange = eve => {
    setQuery(eve.target.value);
  };
  return (
    <>
    {isLoading && <Loader/>}
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput type="text" name="query" value={query}onChange={handleChange} />
        <SearchFormBtn type="submit"><SearchFormBtnlLabel>Search</SearchFormBtnlLabel><FcSearch size={40} /></SearchFormBtn>
      </SearchForm>
      <MoviesList movies={moviesList} />
    </>
  );
};

export default Movies;

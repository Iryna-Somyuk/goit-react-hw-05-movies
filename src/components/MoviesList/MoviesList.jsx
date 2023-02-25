import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BASE_URL_IMG } from 'apiService';
import { Container, CardWrapper, MovieName, CardImg } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
const location = useLocation();

  return (
    <Container>
      {movies.map(movie => (
        <CardWrapper key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
          <CardImg src={BASE_URL_IMG + movie.poster_path} alt='' />
           <MovieName>{movie.title}</MovieName>
           </NavLink>
        </CardWrapper>
      ))}
    </Container>
  );
};

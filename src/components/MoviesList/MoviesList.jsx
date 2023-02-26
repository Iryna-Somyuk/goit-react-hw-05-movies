import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BASE_URL_IMG } from 'apiService';
import {
  Container,
  CardWrapper,
  MovieName,
  CardImg,
} from './MoviesList.styled';

const NO_IMAGE =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map(movie => (
        <CardWrapper key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <CardImg
              src={movie.poster_path ? BASE_URL_IMG + movie.poster_path : NO_IMAGE}
              alt={movie.title}
            />
            <MovieName>{movie.title}</MovieName>
          </NavLink>
        </CardWrapper>
      ))}
    </Container>
  );
};

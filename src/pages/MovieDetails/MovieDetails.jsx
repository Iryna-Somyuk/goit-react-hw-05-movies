import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesDetails, BASE_URL_IMG } from 'apiService';
import { Loader } from 'components/Loader/Loader';
import {
  ContainerDetails,
  GoBackBtn,
  DetailsImg,
  MovieTitle,
  MovieList,
  MovieListItem,
  MovieListItemTitle,
  MovieDetailsVotes,
  MovieDetailsVoteValue,
  MovieDetailsVotesValue,
  MovieDetailsText,
  LinkMovieDetails,
  LinkBtn,
} from './MovieDetails.styled';


const MovieDetails = () => {
  const [detail, setDetail] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  useEffect(() => {
    setLoading(true);
    getMoviesDetails(movieId)
      .then(setDetail)
      .finally(() => setLoading(false));
  }, [movieId]);
  if (!detail) {
    return null;
  }
  return (
    <>
      {isLoading && <Loader />}
      <GoBackBtn type="button" onClick={handleGoBack}>Go back</GoBackBtn>
      <ContainerDetails>
        <DetailsImg src={BASE_URL_IMG + detail.poster_path} alt="" />
        <div>
          <MovieTitle>{detail.title}</MovieTitle>
          <MovieList>
            <MovieListItem>
              <MovieListItemTitle>Vote / Votes</MovieListItemTitle>
              <MovieDetailsVotes>
                <MovieDetailsVoteValue>
                  {detail.vote_average.toFixed(1)}
                </MovieDetailsVoteValue>{' '}
                /
                <MovieDetailsVotesValue>
                  {detail.vote_count}
                </MovieDetailsVotesValue>
              </MovieDetailsVotes>
            </MovieListItem>
            <MovieListItem>
              <MovieListItemTitle>Popularity</MovieListItemTitle>
              <MovieDetailsVotes>
                {detail.popularity.toFixed(1)}
              </MovieDetailsVotes>
            </MovieListItem>
            <MovieListItem>
              <MovieListItemTitle>Original Title</MovieListItemTitle>
              <MovieDetailsVotes>{detail.original_title}</MovieDetailsVotes>
            </MovieListItem>
          </MovieList>
          <MovieDetailsText>{detail.overview}</MovieDetailsText>
        </div>
      </ContainerDetails>
      <LinkMovieDetails>
        <li>
          <LinkBtn to="cast" state={{ from: location.state.from }}>
            Cast
          </LinkBtn>
        </li>
        <li>
          <LinkBtn to="reviews" state={{ from: location.state.from }}>
            Reviews
          </LinkBtn>
        </li>
      </LinkMovieDetails>
      <Outlet />
    </>
  );
};

export default MovieDetails;

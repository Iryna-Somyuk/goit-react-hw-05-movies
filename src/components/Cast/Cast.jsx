import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast, BASE_URL_IMG } from 'apiService';
import {
  ContainerCast,
  CardWrapperCast,
  ActorName,
  CastTitle,
} from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMoviesCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      <CastTitle>Cast</CastTitle>
      <ContainerCast>
        {cast.map(actor => (
          <CardWrapperCast key={actor.id}>
            <img src={BASE_URL_IMG + actor.profile_path} alt={actor.name} />
            <ActorName>{actor.name}</ActorName>
          </CardWrapperCast>
        ))}
      </ContainerCast>
    </div>
  );
};

export default Cast;

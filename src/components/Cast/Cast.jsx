import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast, BASE_URL_IMG } from 'apiService';
import {
  ContainerCast,
  CardWrapperCast,
  ActorName,
  Foto,
  CastTitle,
} from './Cast.styled';

const NO_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

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
            <Foto src={actor.profile_path ? BASE_URL_IMG + actor.profile_path : NO_IMAGE} alt={actor.name} />
            <ActorName>{actor.name}</ActorName>
          </CardWrapperCast>
        ))}
      </ContainerCast>
    </div>
  );
};

export default Cast;


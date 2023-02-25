import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'apiService';
import {
  ContainerReviews,
  ReviewsMessage,
  ReviewsAuthor,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMoviesReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {!reviews.length ? (
        <ReviewsMessage>
          Sorry, there are no reviews for this movie.
        </ReviewsMessage>
      ) : (
        <ContainerReviews>
          {reviews.map(a => (
            <li key={a.id}>
              <ReviewsAuthor>Author: {a.author}</ReviewsAuthor>
              <p>{a.content}</p>
            </li>
          ))}
        </ContainerReviews>
      )}
    </>
  );
};

export default Reviews;

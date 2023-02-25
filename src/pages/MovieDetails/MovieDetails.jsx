import { useParams, useNavigate, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesDetails, BASE_URL_IMG } from 'apiService';
import { Loader } from 'components/Loader/Loader';


const MovieDetails = () => {
  const [detail, setDetail] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate(location.state.from);
  }

  useEffect(()=> {
setLoading(true);
    getMoviesDetails(movieId).then(setDetail).finally(()=> 
      setLoading(false)
     );
  },[movieId]);
if (!detail) {
  return null;
}
  return (
    <div>
       {isLoading && <Loader/>}
      <button type='button' onClick={handleGoBack}>Go back</button>
 
      <img src={BASE_URL_IMG+detail.poster_path} alt='' />
      <h1>{detail.title}</h1>
      
      <ul>
        <li>
          <Link to="cast" state={{ from: location.state.from }}>Cast</Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state.from }}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;

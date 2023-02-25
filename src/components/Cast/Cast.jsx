import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMoviesCast, BASE_URL_IMG } from 'apiService';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();
useEffect(() => {
    getMoviesCast(movieId).then(setCast);
}, [movieId]);


return (<div>
    <h1>Cast</h1>
    {cast.map(actor => (
        <div key={actor.id}>
    <img src={BASE_URL_IMG+actor.profile_path} alt={actor.name} />
    <p>{actor.name}</p>
    </div>)
    )}

    </div>)
};

export default Cast;
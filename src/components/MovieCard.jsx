import React from 'react';
import { Link } from '@reach/router';


import './MovieCard.scss'

const MovieCard = props => (
  <Link className='movieCard' to={'/movie/' + props.data.id} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${props.data.poster_path})` }}>
    <h1>{props.data.title}</h1>
    <p>{props.data.overview}</p>
  </Link>
);

export default MovieCard;

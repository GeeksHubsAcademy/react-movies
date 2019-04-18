import React, { Component } from 'react';

import './MoviesDisplay.scss';

import MovieCard from './MovieCard';

class MovieDisplay extends Component {

  render() {
      return (
        <div className='movieDisplay'>
          <h1>{this.props.title}</h1>
          <div className='movies'>
            {this.props.movies.map(movie => (
              <MovieCard key={movie.id} data={movie} />
            ))}
          </div>
        </div>
      );


  }
}


export default MovieDisplay;

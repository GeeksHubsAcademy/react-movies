import React, { Component } from 'react';

import axios from 'axios';
import './MovieList.scss';


import MovieCard from '../components/MovieCard';
class MovieList extends Component {
  extractType = () => {
    const type = this.props.type

    if (type === 'top_rated' || type === 'upcoming' || type === 'popular') {
      return type;
    } else {
      return 'popular';
    }
  };

  state = {
    movies: [],
    type:'',
  };

  getMovies(type) {
    let url = (_type) => `https://api.themoviedb.org/3/movie/${_type}?api_key=323112ea2281b9eb70f319f4df422c6b`;

    return axios.get(url(type)).then(res => this.setState({ movies: res.data.results, type:type }));
  }

  render() {
console.log(this.props);

    const newType = this.extractType()
    if (newType !== this.state.type) {
      this.getMovies(newType);
      return <h1>loading movies</h1>
    } else {
      return (
        <section className="MovieList">
          <h1> {this.state.type} movies</h1>

          <div className='movies'>
            {this.state.movies.map(movie => (
              <MovieCard key={movie.id} data={movie} />
            ))}
          </div>
        </section>
      );
    }


  }
}

// const MovieList = props => <section>MovieList {JSON.stringify(props)}</section>;

export default MovieList;

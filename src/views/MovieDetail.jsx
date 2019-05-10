import React from 'react';
import Axios from 'axios';

import './MovieDetail.scss'
import MovieDisplay from '../components/MoviesDisplay';


class MovieDetail extends React.Component {
  state = {
    movie: null,
    similar: [],
    id:null
  };
  getData() {
    const url = `https://api.themoviedb.org/3/movie/${this.props.id}?api_key=323112ea2281b9eb70f319f4df422c6b&language=en-US`;

     const similar = `https://api.themoviedb.org/3/movie/${this.props.id}/similar?api_key=323112ea2281b9eb70f319f4df422c6b&language=en-US`;

    Axios.get(url)
      .then(res => this.setState({ movie: res.data, id: this.props.id }))
      .catch(() => this.props.navigate('/notFound'));

    Axios.get(similar)
      .then(res => {
        this.setState({ similar: res.data.results });
      })
  }

  render() {

    if(this.props.id !== this.state.id ) {
      this.getData();
       return <h1>loading</h1>;
    } else {
      let { movie } = this.state;

      if (!movie)  return <h1>loading</h1>;

      let { adult, vote_count, vote_average, homepage, title, backdrop_path, overview, genres, budget, revenue, popularity, release_date, poster_path } = movie;
      return (
        <section className='movieDetail' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${backdrop_path})` }}>
          <div className='movie'>
            <img className='poster' src={'https://image.tmdb.org/t/p/w300/' + poster_path} alt='' />

            <div className='data'>
              <h1>{title}</h1>
              <h1>{adult ? '♦️♦️♦️' : ''}</h1>
              <div className='release'>{release_date}</div>
              <a href={homepage} target='_blank' rel='noopener noreferrer'>
                {homepage}
              </a>
              <p>{overview}</p>
              <div className='genres'>
                {genres.map(el => (
                  <span className='genre' key={el.id}>
                    {el.name}
                  </span>
                ))}
              </div>

              <div className='moreInfo'>
                <div className='vote_average'>
                  Vote average: <span className='big'>{vote_average}</span>
                </div>
                <div className='vote_count'>Vote count: {vote_count}</div>
                <div className='popularity'>Popularity: {popularity}</div>
                <div className='budget'>Budget: $ {budget}</div>
                <div className='revenue'>Revenue: $ {revenue}</div>
              </div>
            </div>
          </div>
          <div className='related'>
            <MovieDisplay movies={this.state.similar} title='Related:' />
          </div>
        </section>
      );
    }


  }
}

export default MovieDetail;

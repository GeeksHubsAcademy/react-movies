import React from 'react';
import Axios from 'axios';

class MovieDetail extends React.Component {
  state = {
    movie: null
  }
  componentDidMount() {
    const url = `https://api.themoviedb.org/3/movie/${this.props.id}?api_key=323112ea2281b9eb70f319f4df422c6b&language=en-US`;

    Axios.get(url)
    .then(res => this.setState({movie: res.data}))
    .catch( () =>  this.props.navigate('/notFound'))

  }

  render() {

    return <section>

      {JSON.stringify(this.state.movie)}
    </section>;
  }
}

export default MovieDetail;

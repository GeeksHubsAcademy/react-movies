import React, { Component } from 'react';
import { Router, Redirect } from '@reach/router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import MovieDetail from './views/MovieDetail';
import MovieList from './views/MovieList';

import './App.scss'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navigation />
        <Router className='main'>
          <MovieDetail path='movie/:id' />
          <MovieList path='movies/:type' />
          <Redirect default from="*" to="movies/popular" noThrow/>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;

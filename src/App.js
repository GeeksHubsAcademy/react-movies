import React, { Component } from 'react';
import { Router, Redirect } from '@reach/router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

import MovieDetail from './views/MovieDetail';
import MovieList from './views/MovieList';

import './App.scss'

class App extends Component {
  render() {
    const basepath = window.baseUrl || ''
    return (
      <div className='app'>
        <Navigation />
        <Router className='main' basepath={basepath}>
          <MovieDetail path={basepath + '/movie/:id'} />
          <MovieList path={basepath + '/movies/:type'} />
          <NotFound path={basepath + '/notFound'} />
          <Redirect default from='*' to={basepath + '/movies/popular'} noThrow />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;

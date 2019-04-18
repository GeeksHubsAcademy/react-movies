import React, { Component } from 'react';
import { Router } from '@reach/router';
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
        <Router className="main">
          <MovieList default path='movies/:type' />
          <MovieDetail path='movie/:id' />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;

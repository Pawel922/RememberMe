import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Main from './layouts/Main';

import './styles/App.css'

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;

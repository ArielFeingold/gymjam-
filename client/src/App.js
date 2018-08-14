import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Signup from './components/Signup'

const App = (props) => {
  return (
    <Router>
      <div className="app">
        <Route exact path="/signup" component={Signup} />
      </div>
    </Router>
  );
};

export default App;

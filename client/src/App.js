import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CreateUser from './containers/CreateUser'

const App = (props) => {
  return (
    <Router>
      <div className="app">
        <Route exact path="/signup" component={CreateUser} />
      </div>
    </Router>
  );
};

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import AUC from './components/AUC/AUC';
import Home from './components/Home/Home';
import InitialDose from './components/InitialDose/InitialDose';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/initial" component={InitialDose} />
          <Route exact path="/auc" component={AUC} />
        </div>
      </Router>
    );
  }
}

export default App;
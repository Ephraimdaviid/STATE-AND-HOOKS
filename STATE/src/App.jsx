import React, { Component } from 'react';
import './App.css';
import PersonProfile from './components/PersonProfile';
import TimeInterval from './components/TimeInterval';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Helloooo</h1>
        <PersonProfile />
        <TimeInterval />
      </div>
    );
  }
}

export default App;
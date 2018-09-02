import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import avengers from './AvengersData.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: avengers,
      myname: "Tom Tarpey"
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Avengers: by {this.state.myname}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

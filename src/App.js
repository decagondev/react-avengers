import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import avengers from "./AvengersData.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: avengers,
      myname: "Tom Tarpey."
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Avengers: by {this.state.myname}</h1>
        </header>
        {this.state.avengers.map(avenger => {
          return (
            <p className="App-intro" key={avenger.id}>
              {avenger.name}
            </p>
          );
        })}
      </div>
    );
  }
}
export default App;

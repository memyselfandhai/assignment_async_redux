import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search.js";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to GoodReads Search</h1>
        </header>
        <Search />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

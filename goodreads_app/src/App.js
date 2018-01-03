import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchContainer from "./containers/SearchContainer.js";
import BookListContainer from "./containers/BookListContainer.js";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to GoodReads Search</h1>
        </header>
        <SearchContainer />
        <BookListContainer />
      </div>
    );
  }
}

export default App;

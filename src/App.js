import React, { Component } from 'react';
import './App.css';
import Apicall from './Apicall';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Using Reddit's API to get posts</h1>
        </header>
        <Apicall />
      </div>
    );
  }
}

export default App;

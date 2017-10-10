import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var unirest = require('unirest');


class App extends Component {
  constructor() {
    super();
    this.state = { fighters: [] };
  }

  componentDidMount() {
    var self = this;
    var req = unirest("GET", "http://localhost:8181/dhp/api/fighters");
    req.headers({'Access-Control-Allow-Origin': '*'});
    req.end(function (response) {
      self.setState({fighters: response.body});
    });
  }

  render() {
    return (
      <div className="App">
      asfsafas
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.fighters.map(function(listValue){
            return <li>{listValue}</li>;
          })}  
      </div>
    );
  }
}


export default App;

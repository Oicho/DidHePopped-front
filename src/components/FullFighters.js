import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// The FullRoster iterates over all of the players and creates
// a link to their profile page.
var unirest = require('unirest');


class FullFighters extends Component {
  constructor() {
    super();
    this.state = { fighters: [] };
  }

  componentDidMount() {
    var self = this;
    var req = unirest("GET", "http://localhost:8181/dhp/api/fighters");
    req.headers({'Access-Control-Allow-Origin': '*'});
    req.end(function (response) {
      console.log(response.body);
      // Check if we get something. with that I can work without the backend running
      if (response.body !== undefined)
        self.setState({fighters: response.body});
    });
  }

  render() {
    return (
      <div className="Fighters">
      <ul>
      {
        this.state.fighters.map(p => (
          <li key={p.id}>
            <Link to={`/fighters/${p.id}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
       
      </div>
    );
  }
}

export default FullFighters

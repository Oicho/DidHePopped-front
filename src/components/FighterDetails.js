import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// The FullRoster iterates over all of the players and creates
// a link to their profile page.
var unirest = require('unirest');

// TODO
class FighterDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.number)
    var fname = props.match.params.number;
    this.state = { fighters: {}, name: fname };
  }

  componentDidMount() {
    var self = this;
    var req = unirest("GET", "http://localhost:8181/dhp/api/fighters/" +this.state.name);
    req.headers({'Access-Control-Allow-Origin': '*'});
    req.end(function (response) {
      // Check if we get something. with that I can work without the backend running
      if (response.body !== undefined)
        self.setState({fighters: response.body});
    });
  }

  render() {
    return (
      <div className="Fighter">
        {this.state.fighters.name}  
      </div>
    );
  }
}

export default FighterDetails

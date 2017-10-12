import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// The FullRoster iterates over all of the players and creates
// a link to their profile page.
var unirest = require('unirest');


class Events extends Component {
  constructor() {
    super();
    this.state = { events: ["UFC1", "UFC"] };
  }

  componentDidMount() {
    var self = this;
    var req = unirest("GET", "http://localhost:8181/dhp/api/events");
    req.headers({'Access-Control-Allow-Origin': '*'});
    req.end(function (response) {
      // Check if we get something. with that I can work without the backend running
      if (response.body !== undefined)
        self.setState({events: response.body});
    });
  }
// TODO add link to /Events/ID
  render() {
    return (
      <div className="Events">
        {this.state.events.map(function(listValue){
            return <li>{listValue}</li>;
          })}  
      </div>
    );
  }
}
export default Events
import React, { Component } from 'react';
import { Link } from "react-router";

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/preferences">Preferences</Link></li>
          <li><Link to="/">Meteor Reapp</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
};

export default App;

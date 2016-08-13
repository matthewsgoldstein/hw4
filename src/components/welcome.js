import React, { Component } from 'react';
import { Link } from 'react-router';

// example class based component (smart component)
class Welcome extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div id="showcontainer">
        <div id="show">
          <div id="showtitle">
            <h1> Welcome to the blog! </h1>
          </div>
          <h3> You can now post, edit, and do other cool stuff! </h3>
          <center><Link to="/">Take me home!</Link></center>
        </div>
      </div>
    );
  }
}

export default Welcome;

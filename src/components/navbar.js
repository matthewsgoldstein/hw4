import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from '../actions';
import { connect } from 'react-redux';

// example class based component (smart component)
class Navbar extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.signoutUser();
  }

  render() {
    if (this.props.authenticated) {
      return (
        <div>
          <div id="header">
            <Link to="/" id="name">The Goldstein Blog</Link>
            <div id="menu">
              <Link to="/new" id="createlink" onClick={this.props.muteError()}><i className="fa fa-plus" aria-hidden="true"></i></Link>&nbsp;&nbsp;&nbsp;
              <div className="signlinks">
                <Link to="/" className="signlink" onClick={this.onSubmit}>Sign Out</Link>
              </div>
            </div>
          </div>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div>
          <div id="header">
            <Link to="/" id="name">The Goldstein Blog</Link>
            <div id="menu">
              <div className="signlinks">
                <Link to="/signin" className="signlink" onClick={this.props.muteError()}>Sign In</Link>&nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </div>
          {this.props.children}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default connect(mapStateToProps, actions)(Navbar);

import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from '../actions';
import { connect } from 'react-redux';

// example class based component (smart component)
class Signup extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const auth = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.signupUser(auth);
  }

  render() {
    return (
      <div id="newcontainer">
        <div id="new">
          <h2>Sign Up</h2>
          <input type="text" placeholder="email/username" id="title" onChange={(event) => this.setState({ email: event.target.value })} />
          <input type="password" placeholder="password" id="tags" onChange={(event) => this.setState({ password: event.target.value })} />
          <div id="submitbuttons">
            <Link to="/" onClick={this.onSubmit}>Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {}
);

export default connect(mapStateToProps, actions)(Signup);

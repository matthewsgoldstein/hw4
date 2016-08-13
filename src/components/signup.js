import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import * as actions from '../actions';
import { connect } from 'react-redux';

// example class based component (smart component)
class Signup extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirm: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state.email);
    console.log(this.state.username);
    console.log(this.state.password);
    this.props.signupUser({ email: this.state.email, username: this.state.username, password: this.state.password });
    browserHistory.push('/');
  }

  render() {
    return (
      <div id="newcontainer">
        <div id="new">
          <h2>Sign Up</h2>
          <input type="text" placeholder="email" id="title" onChange={(event) => this.setState({ email: event.target.value })} />
          <input type="text" placeholder="full name" id="title" onChange={(event) => this.setState({ username: event.target.value })} />
          <input type="password" placeholder="password" id="tags" onChange={(event) => this.setState({ password: event.target.value })} />
          <input type="password" placeholder="confirm password" id="tags" onChange={(event) => this.setState({ passwordConfirm: event.target.value })} />
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

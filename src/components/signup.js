import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Error from './error';

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
    console.log(this.state.password);
    if (!this.state.password || !this.state.email || !this.state.username || !this.state.passwordConfirm) {
      this.props.displayErrorIncomplete();
    } else if (this.state.password !== this.state.passwordConfirm) {
      this.props.displayErrorMismatch();
    } else {
      this.props.signupUser({ email: this.state.email, username: this.state.username, password: this.state.password, passwordConfirm: this.state.passwordConfirm });
    }
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
            <div id="subbutton" onClick={this.onSubmit}>Sign Up</div>
          </div>
          <div id="error">
            <Error />
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

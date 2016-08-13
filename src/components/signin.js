import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import * as actions from '../actions';
import { connect } from 'react-redux';

// example class based component (smart component)
class Signin extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      email: '',
      username: '',
      password: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.signinUser({ email: this.state.email, password: this.state.password });
    browserHistory.push('/');
  }

  render() {
    return (
      <div id="newcontainer">
        <div id="new">
          <h2>Sign In</h2>
          <center><p>No account? <Link to="/signup">Sign up!</Link></p></center>
          <input type="text" placeholder="email" id="title" onChange={(event) => this.setState({ email: event.target.value })} />
          <input type="password" placeholder="password" id="tags" onChange={(event) => this.setState({ password: event.target.value })} />
          <div id="submitbuttons">
            <Link to="/" onClick={this.onSubmit}>Sign In</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {}
);

export default connect(mapStateToProps, actions)(Signin);

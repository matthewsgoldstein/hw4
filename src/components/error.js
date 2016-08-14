import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

// example class based component (smart component)
class Error extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      kind: '',
    };
  }

  render() {
    if (this.props.currentError) {
      return (
        <div>
          {this.props.currentError}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

const mapStateToProps = (state) => (
  {
    currentError: state.error.errorKind,
  }
);

export default connect(mapStateToProps, actions)(Error);

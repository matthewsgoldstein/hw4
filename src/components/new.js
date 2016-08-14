import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import { browserHistory } from 'react-router';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Error from './error';

// example class based component (smart component)
class New extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const post = {
      title: this.state.title,
      tags: this.state.tags,
      content: this.state.content,
    };
    if (!this.state.title || !this.state.content) {
      this.props.displayErrorNew();
    } else {
      this.props.createPost(post);
    }
  }

  render() {
    return (
      <div id="newcontainer">
        <div id="new">
          <h2>Create a New Post</h2>
          <input type="text" placeholder="title" id="title" onChange={(event) => this.setState({ title: event.target.value })} />
          <input type="text" placeholder="tags" id="tags" onChange={(event) => this.setState({ tags: event.target.value })} />
          <Textarea placeholder="content" id="contentnew" onChange={(event) => this.setState({ content: event.target.value })} />
          <div id="submitbuttons">
            <div className="submitnew" onClick={this.onSubmit}>Submit</div>
            &nbsp;&nbsp;
            <div className="submitnew">Cancel</div>
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

export default connect(mapStateToProps, actions)(New);

import React, { Component } from 'react';
import Comment from './Comment.js';
import CommentForm from './CommentForm.js'

class CommentList extends Component {
  render() {
    return (
      <React.Fragment>
        <Comment />
        <Comment />
        <CommentForm />
      </React.Fragment>
    );
  }
}

export default CommentList;

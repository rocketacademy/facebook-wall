import React, { Component } from 'react';
import Comment from './Comment.js';
import CommentForm from './CommentForm.js'

class CommentList extends Component {
  render() {
    return (
      <div>
        <Comment />
        <Comment />
        <CommentForm />
      </div>
    );
  }
}

export default CommentList;

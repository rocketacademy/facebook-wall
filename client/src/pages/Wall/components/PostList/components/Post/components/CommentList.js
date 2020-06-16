import React, { Component } from 'react';
import Comment from './Comment.js';
import CommentForm from './CommentForm.js'

const cl = [
  { owner: "u1", comment: "okokokoko" },
  { owner: "u2", comment: "lulululul" }
]

class CommentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: cl,
    }
  }
  commment_list = () => {
    if (this.state.comments) {
      this.state.comments.map(function (comment) {
        return (
          <Comment owner={comment.owner} comment={comment.comment} />
        )
      })
    }
    else return null
  }
  render() {
    return (
      <React.Fragment>
        {this.commment_list(this.state.props)}
        <CommentForm />
      </React.Fragment>
    );
  }
}

export default CommentList;

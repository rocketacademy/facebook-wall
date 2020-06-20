import React, { Component } from 'react';
import Comment from './Comment.js';
class CommentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
    }
  }
  componentDidUpdate(prevProps){
    if(this.props.comments !== prevProps.comments){
      this.setState({comments: this.props.comments});
    }
  }
  render() {
    return (
      <React.Fragment>
      {this.state.comments?
        <>{this.state.comments.map(function (comment){
          return (
            <Comment ownerId={comment.owner} content={comment.content} />
          )
        })}</> : null}
      </React.Fragment>
    );
  }
}

export default CommentList;

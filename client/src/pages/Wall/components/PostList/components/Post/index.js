import React, { Component } from 'react';
import CommentList from './components/CommentList.js';

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      owner: props.owner,
      content: props.content,
      comments: [],
    }
  }
  render() {
    return (
      <div class="card border-primary my-3">
        <div class="card-body">
          <p class="font-weight-bold">{this.state.owner}</p>
          <p class="font-weight-normal">{this.state.content}</p>
          <hr />
          <CommentList comments = {this.props.comments}/>
        </div>
      </div>
    );
  }
}

export default Post;

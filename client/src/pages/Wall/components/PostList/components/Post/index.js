import React, { Component } from 'react';
import Comment from './components/Comment.js';
import CommentForm from './components/CommentForm.js';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      ownerId: props.ownerId,
      displayName: '',
      content: props.content,
      comments: null,
    }
    this.getCommentList = this.getCommentList.bind(this);
  }
  componentDidMount() {
    this.getOwner();
    this.getCommentList();
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        id: this.props.id,
        ownerId: this.props.ownerId,
        content: this.props.content,
      });
      this.getOwner();
      this.getCommentList();
      console.log(this.state.id);
      console.log(this.props);
    }
  }
  getOwner() {
    let _this = this;
    axios.get('http://localhost:8080/api/users', {
      params: {
        id: this.state.ownerId,
      }
    }).then(function (response) {
      if (response.data.errors) {

      } else {
        _this.setState({
          displayName: response.data.firstname + " " + response.data.lastname,
        })
      }
    });
  }
  getCommentList() {
    let _this = this;
    axios.get('http://localhost:8080/api/comments/', {
      params: {
        postId: this.state.id,
      }
    }).then(function (response) {
      if (response.data.errors) {
        //TODO:
      } else {
        _this.setState({
          comments: response.data,
        });
      }
    });
  }
  render() {
    return (
      <div class="card border-primary my-3">
        <div class="card-body">
          <p class="font-weight-bold">{this.state.displayName}</p>
          <p class="font-weight-normal">{this.state.content}</p>
          <hr />
          {this.state.comments ?
            <>{this.state.comments.map(function (comment) {
              return (
                <Comment ownerId={comment.owner} content={comment.content} />
              )
            })}</> : null}
          <CommentForm postId={this.state.id} updateCommentList={this.getCommentList} />
        </div>
      </div>
    );
  }
}

export default Post;

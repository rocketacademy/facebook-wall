import React, { Component } from 'react';
import Comment from './Comment.js';
import CommentForm from './CommentForm.js'
import axios from 'axios';
class CommentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postId: props.postId,
      comments: [],
    }
    this.getCommentList();
  }
  getCommentList(){
    let _this = this;
    axios.get('http://localhost:8080/api/comments/',{
      params: {
        postId: this.state.postId,
      }
    }).then(function (response){
      if(response.data.errors){
        //TODO:
      } else {
        _this.setState({
          comments: response.data,
        });
      }
      console.log(response.data)
    });
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
      <CommentForm postId={this.state.postId} />
      </React.Fragment>
    );
  }
}

export default CommentList;

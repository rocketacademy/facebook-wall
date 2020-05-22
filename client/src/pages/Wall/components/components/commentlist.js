import React, {Component} from 'react';
import Comment from './comment.js';
import CommentForm from './commentform.js'

class CommentList extends Component{
  render(){
    return(
     <div>
      <Comment />
      <Comment />
      <CommentForm />
    </div>
    );
  }
}

export default CommentList;

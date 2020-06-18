import React, { Component } from 'react';
import axios from 'axios';
class CommentForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      postId: props.postId,
      content: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event){
    this.setState({
      content: event.target.value,
    });
  }
  handleSubmit(event){
    let _this = this;
    event.preventDefault();
    axios.post('http://localhost:8080/api/comments',{
      postId: this.state.postId,
      ownerId: localStorage.getItem('userId'),
      content: this.state.content,
    }).then(function (response){
      if(response.data.errors){
        //TODO
      } else {
      _this.setState({
        content: '',
      })};
  }
    );
}
render() {
  return (
    <div className="card">
    <div className="card-body">
    <form onSubmit={this.handleSubmit}>
    <div className="form-group">
    <textarea className="form-control" id="post-form" placeholder="Write a comment..."  onChange={this.handleInputChange} value={this.state.content}></textarea>
    </div>
    <button type="submit" className="btn btn-primary float-right">Submit</button>
    </form>
    </div>
    </div>
  )
};
}
export default CommentForm;


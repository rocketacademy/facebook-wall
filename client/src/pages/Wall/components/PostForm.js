import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      ownerId: props.ownerId,
      content: '',
    }
    this.handlePostContent = this.handlePostContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handlePostContent(event){
    this.setState({
      content: event.target.value,
    })
  }
  handleSubmit(event){
    let _this = this;
    event.preventDefault();
    axios.post('http://localhost:8080/api/posts/',{
      owner: this.state.ownerId,
      content: this.state.content,
    });
  }
  render() {
    return (
      <div className="card border-primary">
      <div className="card-body">
      <form onSubmit={this.handleSubmit} className="clearfix">
      <div className="form-group">
      <textarea className="form-control" id="post-form" placeholder="What's on your mind?" onChange={this.handlePostContent} value={this.state.content}></textarea>
      </div>
      <button type="submit" className="btn btn-primary w-100">Post</button>
      </form>  
      </div>
      </div>
    )
  };
}
export default PostForm;

import React, {Component} from 'react';

class PostForm extends Component{
  render(){
    return (
      <div class="card border-primary">
      <div class="card-body">
      <div class="form-group">
      <textarea class="form-control" id="post-form" placeholder="What's on your mind?"></textarea>
      </div>
      <button type="submit" className="btn btn-primary w-100">Post</button>
      </div>
      </div>
    ) 
  };
}
export default PostForm;

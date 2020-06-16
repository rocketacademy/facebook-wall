import React, { Component } from 'react';

class PostForm extends Component {
  render() {
    return (
      <div className="card border-primary">
        <div className="card-body">
          <div className="form-group">
            <textarea className="form-control" id="post-form" placeholder="What's on your mind?"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Post</button>
        </div>
      </div>
    )
  };
}
export default PostForm;

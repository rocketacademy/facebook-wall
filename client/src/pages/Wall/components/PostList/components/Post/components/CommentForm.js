import React, { Component } from 'react';

class CommentForm extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="form-group">
            <textarea className="form-control" id="post-form" placeholder="Write a comment..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary float-right">Submit</button>
        </div>
      </div>
    )
  };
}
export default CommentForm;


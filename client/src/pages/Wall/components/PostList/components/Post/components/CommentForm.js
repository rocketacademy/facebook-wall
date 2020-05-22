import React, { Component } from 'react';

class CommentForm extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-body">
          <div class="form-group">
            <textarea class="form-control" id="post-form" placeholder="Write a comment..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary float-right">Submit</button>
        </div>
      </div>
    )
  };
}
export default CommentForm;


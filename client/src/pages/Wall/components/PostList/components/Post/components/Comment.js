import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      owner: props.owner,
      comment: props.comment,
    }
  }
  render() {
    return (
      <div className="card my-2">
        <div className="card-body">
          <p className="font-weight-bold">{this.state.owner}</p>
    <p className="font-weight-normal">{this.state.comment}</p>
        </div>
      </div>
    )
  }
}
export default Comment;

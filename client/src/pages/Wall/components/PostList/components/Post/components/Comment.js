import React, { Component } from 'react';
import axios from 'axios';
class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ownerId: props.ownerId,
      displayName: '',
      content: props.content,
    }
    this.getOwner();
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        ownerId: this.props.ownerId,
        content: this.props.content,
      });
      this.getOwner();
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
        });
      }
    });
  }
  render() {
    return (
      <div className="card my-2">
        <div className="card-body">
          <p className="font-weight-bold">{this.state.displayName}</p>
          <p className="font-weight-normal">{this.state.content}</p>
        </div>
      </div>
    )
  }
}
export default Comment;

import React, { Component } from 'react';
import './style.css';
import axios from 'axios';

class WallTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerId: props.ownerId,
      displayName: props.displayName,
      avatarurl: props.avatarurl,
    }
    this.getWallOwner();
  }
  getWallOwner() {
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
          avatarurl: response.data.avatarurl,
        });
      }
    });
  }
  render() {
    return (
      <React.Fragment>
        <img src={this.state.avatarurl} alt="Avatar" class="avatar" />
        <h3 className="text-center">{this.state.displayName}</h3>
      </React.Fragment>
    );
  }
}
export default WallTop;

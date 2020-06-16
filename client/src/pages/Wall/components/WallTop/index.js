import React, { Component } from 'react';
import './style.css';

class WallTop extends Component {
  render() {
    return (
      <React.Fragment>
        <img src="https://c.files.bbci.co.uk/CF3C/production/_111925035_penguino.jpg" alt="Avatar" class="avatar" />
        <h3 className="text-center">Full name here</h3>
      </React.Fragment>
    );
  }
}
export default WallTop;

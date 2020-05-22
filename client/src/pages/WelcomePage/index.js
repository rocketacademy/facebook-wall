import React, { Component } from 'react'

import Register from './components/Register.js';
import Login from './components/Login.js';

class WelcomePage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>Facebook Wall</h2>
          <div className="row">
            <Register className />
            <Login />
          </div>
        </div>

      </div>
    )
  }
}

export default WelcomePage;

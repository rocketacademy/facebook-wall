import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',

      errors: null,
      userLoggedIn: false,
    }
  }

  render() {
    return (
      <div className="col-md">
        <h5> Log In</h5>

        <form onSubmit="">
          <div className="form-group">
            <label htmlFor="login-email">Email address</label>
            <input onChange="" value={this.state.email} type="email" className="form-control" id="login-email" name="email" placeholder="Enter email" />

          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input onChange="" value={this.state.password} type="password" className="form-control" id="login-password" name="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Log In</button>
        </form>
      </div>
    )
  }
}

export default Login;

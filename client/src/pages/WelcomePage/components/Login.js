import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    let _this = this;
    event.preventDefault();
    axios(`penguin:8080/api/login`, {
      method: 'post',
      data: {
        email: this.state.email,
        password: this.state.password
      },

    })
      .then(function (response) {
        if (response.data.errors) {
          _this.setState({ errors: response.data.errors })
        } else {
          _this.setState({ userLoggedIn: true })
        }
        console.log(response);
      })

  }
  render() {
    return (
      <div className="col-md">
        <h5> Log In</h5>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="login-email">Email address</label>
            <input onChange={this.handleInputChange} value={this.state.email} type="email" className="form-control" id="login-email" name="email" placeholder="Enter email" />

          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input onChange={this.handleInputChange} value={this.state.password} type="password" className="form-control" id="login-password" name="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Log In</button>
        </form>
      </div>
    )
  }
}

export default Login;

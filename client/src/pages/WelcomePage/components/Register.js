import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',

      errors: null,

      registrationCompleted: false,

    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    let _this = this;
    axios.post('penguin:8080/api/users/register/', {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      avatarurl: "https://vnn-imgs-f.vgcloud.vn/2020/03/23/11/trend-avatar-1.jpg",
    })
      .then(function (response) {
        console.log(response);
        if (response.data.errors) {
          _this.setState({ errors: response.data.errors })
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });

  }
  render() {
    return (
      <div className="col-md">
        <form onSubmit={this.handleSubmit}>
          <h5> Register</h5>

          <div className="form-group">
            <label htmlFor="register-firstname">First Name</label>
            <input type="text" className="form-control" id="register-firstname" onChange={this.handleInputChange} value={this.state.firstname} name="firstname" placeholder="First Name" />
          </div>

          <div className="form-group">
            <label htmlFor="register-lastname">Last Name</label>
            <input type="text"
              className="form-control"
              id="register-lastname"
              onChange={this.handleInputChange}
              value={this.state.lastname}
              name="lastname"
              placeholder="Last Name" />
          </div>

          <div className="form-group">
            <label htmlFor="register-email">Email address</label>
            <input type="email"
              className="form-control"
              id="register-email"
              onChange={this.handleInputChange}
              value={this.state.email}
              name="email"
              placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label htmlFor="register-password">Password</label>
            <input type="password"
              className="form-control"
              id="register-password"
              onChange={this.handleInputChange} value={this.state.password} name="password" placeholder="Password" />
            {this.state.errors &&
              <p className="text-danger">{this.state.errors}</p>}
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div >
    )
  }
}

export default Register;

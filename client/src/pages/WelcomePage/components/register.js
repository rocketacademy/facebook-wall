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
  }
  render() {
    return (
      <div className="col-md">
        <div>
          <form onSubmit="">
            <h5> Register</h5>

            <div className="form-group">
              <label htmlFor="register-firstname">First Name</label>
              <input type="text" className="form-control" id="register-firstname" onChange="" value={this.state.firstname} name="firstname" placeholder="First Name" />
            </div>

            <div className="form-group">
              <label htmlFor="register-lastname">Last Name</label>
              <input type="text" className="form-control" id="register-lastname" onChange="" value={this.state.lastname} name="lastname" placeholder="Last Name" />
            </div>

            <div className="form-group">
              <label htmlFor="register-email">Email address</label>
              <input type="email" className="form-control" id="register-email" onChange="" value={this.state.email} name="email" placeholder="Enter email" />

              <div className="form-group">
                <label htmlFor="register-password">Password</label>
                <input type="password" className="form-control" id="register-password" onChange="" value={this.state.password} name="password" placeholder="Password" />
              </div>

              <button type="submit" className="btn btn-primary">Register</button>

            </div>
          </form>
        </div>
      </div>

    )
  }
}

export default Register;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: props.userLoggedIn,
    }
    this.signOut = this.signOut.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (this.props.userLoggedIn !== prevProps.userLoggedIn) {
      this.setState({ userLoggedIn: this.props.userLoggedIn });
    }
  }
  signOut() {
    localStorage.setItem('userLoggedIn', false);
    this.setState({ userLoggedIn: false });
    this.props.handleSignOut();
  }
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a class="navbar-brand" href='/#'>Facebook Wall</a>
        {this.state.userLoggedIn ?
          <button class="btn btn-danger my-2 my-sm-0 ml-2" onClick={this.signOut} >Sign out</button>
          :
          <Link to='/'>
            <button class="btn btn-danger my-2 my-sm-0 ml-2">Log in</button>
          </Link>
        }
      </nav>
    );
  }
}
export default NavBar;




import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import WallTop from './components/WallTop';
import PostForm from './components/PostForm.js';
import PostList from './components/PostList';

class Wall extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUserId: props.location.state?props.location.state.currentUserId:-1,
      ownerId: props.match.params.id,
    }
    this.componentDidMount();
  }
  componentDidMount() {
    const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    const userId = userLoggedIn ? localStorage.getItem('userId') : -1;
    this.setState({ currentUserId: userId});
  }
  render() {
    return (
      <React.Fragment>
      <NavBar />
      <div className="container p-5">
      <WallTop ownerId={this.state.ownerId}/>
      {this.state.currentUserId === this.state.ownerId ? <PostForm ownerId={this.state.ownerId}/> : null}
      <PostList ownerId={this.state.ownerId} />
      </div>
      </React.Fragment>
    )
  }
}

export default Wall;

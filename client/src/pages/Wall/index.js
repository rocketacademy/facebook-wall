import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import WallTop from './components/WallTop';
import PostForm from './components/PostForm.js';
import PostList from './components/PostList';

class Wall extends Component {
  contructor(props) {
    this.state = {
      currentUserId: props.currentUserId,
      owner: props.owner,
    }
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container p-5">
          <WallTop />
          {this.state.currentUserId != this.state.owner ? <PostForm /> : null}
          <PostList />
        </div>
      </React.Fragment>
    )
  }
}

export default Wall;

import React, { Component } from 'react';
import NavBar from './components/navbar.js';
import WallTop from './components/WallTop';
import PostForm from './components/postform.js';
import PostList from './components/PostList';

class Wall extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container p-5">
          <WallTop />
          <PostForm />
          <PostList />
        </div>
      </div>
    )
  }
}

export default Wall;

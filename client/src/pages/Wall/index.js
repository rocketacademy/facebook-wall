import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import WallTop from './components/WallTop';
import PostForm from './components/PostForm.js';
import PostList from './components/PostList';
import axios from 'axios';
class Wall extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userLoggedIn: props.location.state ? true : false,
      currentUserId: props.location.state ? props.location.state.currentUserId : -1,
      ownerId: props.match.params.id,
      posts: [],
    }
    this.getPost = this.getPost.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    if (!(this.props.location.state)) {
      const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
      const userId = isLoggedIn ? localStorage.getItem('userId') : -1;
      this.setState({ userLoggedIn: isLoggedIn, currentUserId: userId });
    }
    this.getPost();
  }
  getPost() {
    let _this = this;
    axios.get('http://localhost:8080/api/posts', {
      params: {
        ownerId: this.state.ownerId,
      }
    })
      .then(function (response) {
        if (response.data.errors) {
        } else {
          _this.setState({
            posts: response.data
          });
        }
      });
  }
  handleSignOut() {
    this.setState({ userLoggedIn: false, currentUserId: -1 });
  }
  render() {
    return (
      <React.Fragment>
        <NavBar userLoggedIn={this.state.userLoggedIn} handleSignOut={this.handleSignOut} />
        <div className="container p-5">
          <WallTop ownerId={this.state.ownerId} />
          {this.state.currentUserId.toString() === this.state.ownerId ? <PostForm ownerId={this.state.ownerId} updatePostList={this.getPost} /> : null}
          <PostList posts={this.state.posts} />
        </div>
      </React.Fragment>
    )
  }
}

export default Wall;

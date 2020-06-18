import React, { Component } from 'react';
import Post from './components/Post';
import axios from 'axios';
class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerId: props.ownerId,
      posts: null,
    }
    this.getPost();
    console.log(this.state.ownerId);
  }
  getPost(){
    let _this = this;
    axios.get('http://localhost:8080/api/posts', { 
      params:{
        ownerId: this.state.ownerId,
      }})
      .then(function (response) {
        if (response.data.errors) {
          _this.setState({ errors: response.data.errors })
        } else {
          _this.setState({
            posts: response.data
          })
        }
        console.log(response);
      })

  }  
  render() {
    return (
      <React.Fragment>
      {this.state.posts ?
        <>{
          this.state.posts.map(function (post) {
            return (
              <Post id={post.id} ownerId={post.owner} content={post.content} />
            )
          })
        }</> : null}
      </React.Fragment >
    );
  }
}

export default PostList;

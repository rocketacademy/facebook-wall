import React, { Component } from 'react';
import Post from './components/Post';

var ok = [
  {
    id: "1",
    owner: "OS",
    content: "lamoaofasd",
  },
  {
    id: "2",
    owner: "Lmao",
    content: "huhu"
  }
]

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: ok
    }
  }
  render() {
    return (
      <React.Fragment>
        {this.state.posts ?
          <>{
            this.state.posts.map(function (post) {
              return (
                <Post id={post.id} owner={post.owner} content={post.content} />
              )
            })
          }</> : null}
      </React.Fragment >
    );
  }
}

export default PostList;

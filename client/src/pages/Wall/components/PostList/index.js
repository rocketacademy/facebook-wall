import React, { Component } from 'react';
import Post from './components/Post';
class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.posts !== prevProps.posts) {
    this.setState({ posts: this.props.posts });
    }
  }
  render() {
    return (
      <React.Fragment>
        {this.state.posts ?
          <>{
            this.state.posts.map(function (post) {
              return (
                <Post key={post.id} id={post.id} ownerId={post.owner} content={post.content} />
              )
            })
          }</> : null}
      </React.Fragment >
    );
  }
}

export default PostList;

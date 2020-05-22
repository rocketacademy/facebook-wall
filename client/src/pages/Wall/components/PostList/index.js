import React, {Component} from 'react';
import Post from './components/Post';

class PostList extends Component{
  render(){
    return(
      <React.Fragment>
      <Post />
      <Post />
      <Post />
      </React.Fragment>
    );
  }
}

export default PostList;

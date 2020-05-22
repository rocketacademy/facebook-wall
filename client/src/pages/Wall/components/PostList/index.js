import React, {Component} from 'react';
import Post from './components/Post';

class PostList extends Component{
  render(){
    return(
      <div>
      <Post />
      <Post />
      <Post />
      </div>
    );
  }
}

export default PostList;

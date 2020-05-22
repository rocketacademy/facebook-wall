import React, {Component} from 'react';
import CommentList from  './components/commentlist.js';

class Post extends Component{
  render(){
    return(
      <div class="card border-primary my-3">
      <div class="card-body">
      <p class="font-weight-bold">User name</p>
      <p class="font-weight-light">8:30am 20/2/2222</p>
      <p class="font-weight-normal">
      "When the world's getting hard 
      I will go to wherever you are
      Running blind in the dark
      I will go to wherever you are
      Wherever you are
      That's where I'll be
      Wherever you are
      That's where I'll be"
      </p>
      <hr/>
      <CommentList />
      </div>
      </div>     
    );
  }
}

export default Post;

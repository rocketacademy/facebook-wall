import React, { Component } from 'react';
import CommentList from './components/CommentList.js';
import axios from 'axios';
class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      ownerId: props.ownerId,
      displayName: '',
      content: props.content,
    }
    this.getOwner();
  }
  getOwner(){
    let _this = this;
    axios.get('http://localhost:8080/api/users',{
      params: {
        id: this.state.ownerId,
      }}).then(function (response){
        if(response.data.errors){

        } else {
          _this.setState({
            displayName: response.data.firstname + " " + response.data.lastname,
          })
        }
        console.log(response);
      });
  }
  render() {
    return (
      <div class="card border-primary my-3">
      <div class="card-body">
      <p class="font-weight-bold">{this.state.displayName}</p>
      <p class="font-weight-normal">{this.state.content}</p>
      <hr />
      <CommentList postId={this.props.id}/>
      </div>
      </div>
    );
  }
}

export default Post;

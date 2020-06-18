import db from '../models'
const Post = db.posts
const User = db.users
const Comment = db.comments

//
// Post
//

// Create a new Post.
export function createPost(req, res) {
  console.log(req.body)
  // Check that required fields are present.
  if (!(req.body.owner && req.body.content)) {
    res.sendStatus(400)
    return
  }
  // Create Post from data.
  const post = {
    owner: req.body.owner,
    content: req.body.content,
  }
  // Save Post in the database.
  Post.create(post)
    .then((data) => res.send(data))
    .catch((_) => res.sendStatus(500))
}

// Delete a Post with id specified in req.
export function deletePost(req, res) {
  if (!req.body.id) {
    res.sendStatus(400)
    return
  }
  Post.destroy({
    where: { id: id },
  })
    .then((count) => {
      if (count) {
        res.sendStatus(200)
      } else {
        res.sendStatus(404)
      }
    })
    .catch((_) => res.sendStatus(500))
}

// Retrieve all posts of an user from the databse.
export function getPosts(req, res) {
  if(!(req.query.ownerId)){
    res.status(400);
    return;
  }
  Post.findAll({where:{owner: req.query.ownerId}})
    .then((data) => res.send(data))
    .catch((_) => res.sendStatus(500))
}

//
//  User
//
//

// Create a new user.
export function createUser(req, res) {
  // Check that required fields are present.
  if (!(req.body.firstname && req.body.lastname && req.body.email && req.body.password && req.body.avatarurl)) {	
    res.sendStatus(400)
    return
  }
  console.log(req.body)
  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    avatarurl: req.body.avatarurl,
  }
  // Save the user in the database.
  User.create(user)
    .then((data) => res.send(data))
    .catch((_) => res.sendStatus(500))
}

// Delete an user with id specified in req.
export function deleteUser(req, res) {
  res.send(req.quert)
  if (!req.body.email) {
    res.sendStatus(400)
    return
  }
  User.destroy({
    where: { email: req.body.email},
  })
    .then((count) => {
      if (count) {
        res.sendStatus(200)
      } else {
        res.sendStatus(404)
      }
    })
    .catch((_) => res.sendStatus(500))
}

// Find an user using email or id
export function getAnUser(req, res) {
  console.log(req.query)
  if(req.query.email){
    User.findOne(
      {where: { email: req.query.email}})
      .then((data) => res.send(data))
      .catch((_) => res.send("not found"));
  }
  else if(req.query.id){
    User.findOne({where:{id: req.query.id}})
      .then((data) => res.send(data))
      .catch((_) => res.send("not found"));
  }
  else {
    res.sendStatus(500);
    return;
  }
}


// Login

export function login(req, res) {
  User.findOne({where:{
    email: req.body.email,
    password: req.body.password
  }}).then(function (user) {
    if (!user) {
      let errors_value = {
        login: { msg: 'Wrong email or password' }
      }
      return res.send({ errors: errors_value })
    } else {
      console.log(user);
      //req.session.user = user;
      return res.send({ userId: user.id });
    }
    res.send(user);

  })
    .catch(function (error) {
      console.log(error);
    })
}

//
// Comment
//
//

// Create a new comment.
export function createComment(req, res) {
  console.log(req.body);
  if (!(req.body.postId && req.body.ownerId && req.body.content)) {
    res.sendStatus(400)
    return
  }
  const comment = {
    postId: req.body.postId,
    owner: req.body.ownerId,
    content: req.body.content,
  }
  Comment.create(comment)
    .then((data) => res.send(data))
    .catch((_) => res.sendStatus(500))
}

// Delete a comment with id specified in req.
export function deleteComment(req, res) {
  if (!req.body.id) {
    res.sendStatus(400)
    return
  }
  Comment.destroy({
    where: { id: req.body.id },
  })

    .then((count) => {
      if (count) {
        res.sendStatus(200)
      } else {
        res.sendStatus(404)
      }
    })
    .catch((_) => res.sendStatus(500))
}

// Retrieve comment list of a post from the databse.

export function getCommentList(req, res) {
  console.log(req.query);
  if(!(req.query.postId)){
    res.sendStatus(400);
    return;
  }
  Comment.findAll({where:{ postId: req.query.postId }})
    .then((data) => res.send(data))
    .catch((_) => res.sendStatus(500));
}



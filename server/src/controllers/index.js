import db from '../models'

const Post = db.posts
const User = db.users
const Comment = db.comments
//
// Post
//

// Create a new Post.
export function createPost(req, res) {
	// Check that required fields are present.
	if (!(req.body.poster && req.body.title && req.body.content)) {
		res.sendStatus(400)
		return
	}
	// Create Post from data.
	const post = {
		poster: req.body.poster,
		title: req.body.title,
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

// Retrieve all Posts from the databse.
export function getAllPosts(_, res) {
	Post.findAll()
		.then((data) => res.send(data))
		.catch((_) => res.sendStatus(500))
}

//
//  User
//
//

// Create a new user.
export function createUser(req, res) {
	console.log(req.query);
	console.log(req.body);

	// Check that required fields are present.
	if (!(req.body.firstname && req.body.lastname && req.body.email && req.body.password && req.body.avatarurl)) {
		res.send("lmao")
		res.sendStatus(400)
		return
	}
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

// Retrieve an user from the databse using email.
export function getAnUser(_, res) {
	User.findOne({
		email: _.email
	})
		.then((data) => res.send(data))
		.catch((_) => res.send("not found"))
}

// Login

export function login(req, res) {
	User.findOne({
		email: req.body.email,
		password: req.body.password
	})
		.then(function (user) {
			if (!user) {
				let errors_value = {
					login: { msg: 'Wrong email or password' }
				}
				return res.send({ errors: errors_value })
			} else {
				req.session.user = user;
				return res.send({ message: 'You are signed in' });
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
	// Check that required fields are present.
	if (!(req.body.postid && req.body.poster && req.body.content)) {
		res.sendStatus(400)
		return
	}
	// Create Post from data.
	const comment = {
		postid: req.body.postid,
		poster: req.body.poster,
		content: req.body.content,
	}
	// Save Post in the database.
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
	Comment.findAll({where:{ postid: req.body.id }})
		.then(function (comments) {
			res.send(comments);
		})
		.catch(function (error) {
			res.send({ status: 'error', message: 'problem in the database' });
		})
}



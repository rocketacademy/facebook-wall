import db from '../models'

const Post = db.posts

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

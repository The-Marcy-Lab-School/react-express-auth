const { isAuthorized } = require('../utils/auth-utils');
const Post = require('../db/models/Post');

// GET /api/users/:user_id
// GET /api/users/:user_id/posts

// POST /api/posts == "wiki style"

/* 
What are the places we can get data from a POST request?
1. request body
2. request URL (req.params)
*/

// POST /api/users/:user_id/posts
exports.createPost = async (req, res) => {
  const user_id = req.params.user_id
  const { content, img_public_id } = req.body;

  const newPost = await Post.create(content, img_public_id, user_id);
  res.send(newPost);
};

// GET /api/users/:user_id/posts?filter=cat
exports.getPostsByUserId = async (req, res) => {
  const user_id = req.params.user_id
  // const filter = req.query.filter;

  const posts = await Post.findPostsByUserId(user_id);
  res.send(posts);
};

// GET /api/users/posts
exports.getAllPosts = async (req, res) => {
  const posts = await Post.getAllPosts();
  res.send(posts);
};

// DELETE /api/users/:user_id/posts/:post_id
exports.deletePost = async (req, res) => {
  const { post_id, user_id } = req.params;
  console.log(post_id, user_id, req.session.userId)

  if (!isAuthorized(user_id, req.session)) return res.sendStatus(403);

  await Post.deletePost(post_id);
  res.sendStatus(202);
};

// DELETE /api/users/:user_id/posts
exports.deleteAllPostsByUser = async (req, res) => {
  const { user_id } = req.params;

  if (!isAuthorized(user_id, req.session)) return res.sendStatus(403);

  await Post.deleteAllPostsByUser(user_id);
  res.sendStatus(202);
};

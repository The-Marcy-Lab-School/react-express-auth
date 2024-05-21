const { isAuthorized } = require('../utils/auth-utils');
const Post = require('../db/models/Post');

// GET /api/users/:user_id
// GET /api/users/:user_id/posts

// POST /api/posts == "wiki style"

/* 
What are the places we can get data from a POST request?
1. request body (req.body)
2. request URL (req.params)
*/

// "flat" URL structure
// POST /api/posts
// body: { content: "string", img_public_id: "string", user_id: int }

// "hierarchical URL structure"
// POST /api/users/:user_id/posts
// body: { content: "string", img_public_id: "string" }
exports.createPost = async (req, res) => {
  const { user_id } = req.params
  const { content, img_public_id } = req.body;

  const newPost = await Post.create(content, img_public_id, user_id);
  res.send(newPost);
};

// GET /api/users/:user_id/posts
exports.getPostsByUserId = async (req, res) => {
  const { user_id } = req.params
  const posts = await Post.findPostsByUserId(user_id);
  res.send(posts);
};

// GET /api/users/:user_id/follows/posts
exports.getFollowsPostsByUserId = async (req, res) => {
  const { user_id } = req.params
  const posts = await Post.getFollowsPostsByUserId(user_id);
  res.send(posts);
}

// GET /api/users/posts
exports.getAllPosts = async (req, res) => {
  const posts = await Post.getAllPosts();
  res.send(posts);
};

// DELETE /api/users/:user_id/posts/:post_id
exports.deletePost = async (req, res) => {
  const { post_id, user_id } = req.params;

  if (!isAuthorized(user_id, req.session)) return res.sendStatus(403);

  await Post.deletePost(post_id);
  res.sendStatus(204);
};

// DELETE /api/users/:user_id/posts
exports.deleteAllPostsByUser = async (req, res) => {
  const { user_id } = req.params;

  if (!isAuthorized(user_id, req.session)) return res.sendStatus(403);

  await Post.deleteAllPostsByUser(user_id);
  res.sendStatus(204);
};

const { isAuthorized } = require('../utils/auth-utils');
const Like = require('../db/models/Like');

// POST /api/users/:user_id/posts/:post_id/likes - create a new like of user_id's post with post_id
exports.createLike = async (req, res) => {
  const { post_id } = req.params
  const likerId = req.session.userId;

  const newLike = await Like.create(likerId, post_id);
  res.sendStatus(201);
};

// DELETE /api/users/:user_id/posts/:post_id/likes - create a new follower of user_id
exports.unLike = async (req, res) => {
  const { post_id } = req.params
  const likerId = req.session.userId;

  await Like.unLike(likerId, post_id);
  res.sendStatus(204);
};

// GET /api/users/:user_id/posts/:post_id/likes
exports.getLikesOfPost = async (req, res) => {
  const { post_id } = req.params
  res.send(await Like.findLikesOfPost(post_id));
}

// GET /api/users/:user_id/likes
exports.getLikesByUser = async (req, res) => {
  const { user_id } = req.params
  if (!isAuthorized(user_id, req.session)) res.sendStatus(401);
  res.send(await Like.findLikesByUser(user_id));
}
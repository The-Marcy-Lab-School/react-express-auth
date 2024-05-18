const { isAuthorized } = require('../utils/auth-utils');
const Follow = require('../db/models/Follow');

// POST /api/users/:user_id/followers - create a new follower of user_id
exports.createFollow = async (req, res) => {
  const { user_id } = req.params
  const follower_user_id = req.session.userId;

  const newFollow = await Follow.create(follower_user_id, user_id);
  res.send(newFollow);
};

// DELETE /api/users/:user_id/followers - create a new follower of user_id
exports.unFollow = async (req, res) => {
  const { user_id } = req.params
  const follower_user_id = req.session.userId;

  await Follow.unFollow(follower_user_id, user_id);
  res.sendStatus(202);
};

// GET /api/users/:user_id/followers - get followers of user_id
exports.getFollowers = async (req, res) => {
  const { user_id } = req.params
  const followers = await Follow.findFollowersOf(user_id)
  res.send(followers);
}

// GET /api/users/:user_id/follows - Get follows by user_id
exports.getFollows = async (req, res) => {
  const { user_id } = req.params
  const following = await Follow.findFollowsBy(user_id)
  res.send(following);
}

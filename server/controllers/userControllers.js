const { isAuthorized } = require('../utils/auth-utils');
const User = require('../db/models/User');

exports.createUser = async (req, res) => {
  const { username, password } = req.body;

  // TODO: check if username is taken, and if it is what should you return?
  const user = await User.create(username, password);
  req.session.userId = user.id;

  res.send(user);
};

exports.listUsers = async (req, res) => {
  const users = await User.list();
  res.send(users);
};

exports.showUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.find(id);
  if (!user) return res.sendStatus(404);

  res.send(user);
};

exports.updateUser = async (req, res) => {
  const { username, bio, password } = req.body;
  const { id } = req.params;

  // Not only do users need to be logged in to update a user, they
  // need to be authorized to perform this action for this particular
  // user (users should only be able to change their own profiles)
  if (!isAuthorized(id, req.session)) return res.sendStatus(403);

  let updatedUser;
  if (username) {
    updatedUser = await User.updateUsername(id, username);
    if (!updatedUser) return res.sendStatus(404)
  }
  if (bio) {
    updatedUser = await User.updateBio(id, bio);
    if (!updatedUser) return res.sendStatus(404)
  }
  if (password) {
    updatedUser = await User.updatePassword(id, password);
    if (!updatedUser) return res.sendStatus(404)
  }

  res.send(updatedUser);
};
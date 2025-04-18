const User = require('../models/User');

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
  const { username } = req.body;
  const { id } = req.params;

  // A user is only authorized to modify their own user information
  // e.g. User 5 sends a PATCH /api/users/5 request -> success!
  // e.g. User 5 sends a PATCH /api/users/4 request -> 403!
  if (Number(id) !== Number(req.session.userId)) return res.sendStatus(403);

  const updatedUser = await User.update(id, username);
  if (!updatedUser) return res.sendStatus(404);

  res.send(updatedUser);
};
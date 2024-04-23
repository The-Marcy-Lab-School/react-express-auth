const { isAuthorized } = require('../utils/auth-utils');
const User = require('../db/models/User');

exports.createUser = async (req, res) => {
  const {
    session, // this req.session property is put here by the handleCookieSessions middleware
    body: { username, password }, // this req.body property is put here by the client
  } = req;

  // TODO: check if username is taken, what should you return?
  const user = await User.create(username, password);
  session.userId = user.id;

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
  const {
    session,
    body: { username },
    params: { id }
  } = req;

  // Not only do users need to be logged in to update a user, they
  // need to be authorized to perform this action for this particular
  // user (users should only be able to change their own profiles)
  if (!isAuthorized(id, session)) return res.sendStatus(403);

  const user = await User.find(id);
  if (!user) return res.sendStatus(404);

  const updatedUser = await user.update(username);
  res.send(updatedUser);
};



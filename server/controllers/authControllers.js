const User = require('../db/models/User');

exports.loginUser = async (req, res) => {
  const {
    session, // this req.session property is put here by the handleCookieSessions middleware
    body: { username, password }, // this req.body property is put here by the client
  } = req;

  console.log(session);
  console.log(username, password);

  const user = await User.findByUsername(username);
  if (!user) return res.sendStatus(404);

  const isPasswordValid = await user.isValidPassword(password);
  if (!isPasswordValid) return res.sendStatus(401);

  session.userId = user.id;
  res.send(user);
};

exports.logoutUser = (req, res) => {
  req.session = null; // this req.session property is put here by the handleCookieSessions middleware
  res.sendStatus(204);
};

exports.showMe = async (req, res) => {
  const { session } = req; // this req.session property is put here by the handleCookieSessions middleware 
  console.log(session);
  if (!session.userId) return res.sendStatus(401);

  const user = await User.find(session.userId);
  res.send(user);
};
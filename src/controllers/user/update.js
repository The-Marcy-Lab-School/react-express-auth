const { isAuthorized } = require('../../utils/auth-utils');

const updateUser = async (req, res) => {
  const {
    session, // this req.session property is put here by the handleCookieSessions middleware
    db: { User }, // this req.db.User property is put here by the addModelsToRequest middleware
    body: { username }, // this req.body property is put here by the client
    params: { id }, // this req.params.id is a part of the request URL
  } = req;

  if (!isAuthorized(id, session)) return res.sendStatus(403);

  const user = await User.find(id);
  if (!user) return res.sendStatus(404);

  const updatedUser = await user.update(username);
  res.send(updatedUser);
};

module.exports = updateUser;

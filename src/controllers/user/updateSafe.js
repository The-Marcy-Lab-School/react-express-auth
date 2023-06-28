// const { isAuthorized } = require('../../utils/auth-utils');

const updateUser = async (req, res) => {
  const {
    session : { userId },
    db: { User },
    body : { isSafe }
  } = req;

  if (!userId) return res.sendStatus(404);

  const user = await User.updateSafe(userId, isSafe);
  if (!user) return res.sendStatus(404);
  return res.send(user).status(200).end();
};

module.exports = updateUser;
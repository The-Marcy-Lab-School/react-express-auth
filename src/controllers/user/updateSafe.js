// const { isAuthorized } = require('../../utils/auth-utils');

const updateUser = async (req, res) => {
  const {
    session,
    db: { User },
    params: { id },
    body,
  } = req;
  console.log(session)

  

  const user = await User.updateSafe(session.userId);
  console.log(user)
  if (!user) return res.sendStatus(404);
  return res.send(user).status(200).end();
};

module.exports = updateUser;
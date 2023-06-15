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
//   console.log(user)
//   if (!user) return res.sendStatus(404);

//   const updatedUser = await user.update(username);
//   res.send(updatedUser);
};

module.exports = updateUser;
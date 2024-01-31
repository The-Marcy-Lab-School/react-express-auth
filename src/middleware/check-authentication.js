// Is the user logged in?
// Not specific user, just ANY user
const checkAuthentication = (req, res, next) => {
  const { userId } = req.session;
  if (!userId) return res.sendStatus(401);

  req.user = { id: userId }; // to get user id 

  return next();
};

module.exports = checkAuthentication;

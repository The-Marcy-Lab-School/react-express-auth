const showMe = async (req, res) => {
  const { session, db: { User } } = req;
    console.log(session.userId)
  if (!session.userId) return res.sendStatus(401);

  const user = await User.find(session.userId);
  res.send(user);
};

module.exports = showMe;

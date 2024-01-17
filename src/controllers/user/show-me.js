const showMe = async (req, res) => {
  const {
    session, // this req.session property is put here by the handleCookieSessions middleware
    db: { User }, // this req.db.User property is put here by the addModelsToRequest middleware
  } = req;
  if (!session.userId) return res.sendStatus(401);

  const user = await User.find(session.userId);
  res.send(user);
};

module.exports = showMe;

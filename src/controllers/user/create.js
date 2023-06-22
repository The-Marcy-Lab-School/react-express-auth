const createUser = async (req, res) => {
  const {
    session,
    db: { User },
    body: { username, password, location },
  } = req;
  // TODO: check if username is taken, what should you return?
  const user = await User.create(username, password, location);
  session.userId = user.id;

  res.send(user);
};

module.exports = createUser;

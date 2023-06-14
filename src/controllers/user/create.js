const createUser = async (req, res) => {
  const {
    session,
    db: { User },
    body: { first_name, last_name, username, email, password },
  } = req;

  // TODO: check if username or email is taken, what should you return?
  const user = await User.create(
    first_name,
    last_name,
    username,
    email,
    password,
  );
  session.userId = user.id;

  res.send(user);
};

module.exports = createUser;

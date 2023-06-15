const createUser = async (req, res) => {
  const {
    session,
    db: { User },
    body: { first_name, last_name, age , gender, race, ethnicity, username, password, email },
  } = req;

  // TODO: check if username is taken, what should you return?
  const user = await User.create( first_name, last_name, age , gender, race, ethnicity, username, password, email);
session.userId = user.id;
  res.send(user);
  
};

module.exports = createUser;
